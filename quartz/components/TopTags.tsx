import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Fragment, h } from "preact"
import { pathToRoot, slugTag } from "../util/path"
import { i18n } from "../i18n"
import modernStyle from "./styles/toc.scss" // Import the modern ToC styles

// Define configuration options
interface Options {
  /** How many tags to display, sorted by frequency. */
  limit: number
  /** Tags to exclude from the list. */
  excludeTags: string[]
  /** Title for the component. */
  title?: string
  /** Whether to show the count next to each tag. */
  showCount: boolean
}

const defaultOptions: Options = {
  limit: 5, // Default to showing top 5
  excludeTags: [], // Default empty exclusion list
  title: undefined, // Use i18n default if not set
  showCount: true, // Default to showing counts
}

// Component showing Top N tags by frequency
export const TopTags: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
}: QuartzComponentProps) => {

  // Safely access user-defined options for this component
  const userOpts = cfg?.configuration?.components?.TopTags ?? {}
  // Merge user config with defaults
  const opts = { ...defaultOptions, ...userOpts }

  const limit = opts.limit
  const excludeTagsSet = new Set(opts.excludeTags.map(tag => tag.toLowerCase()))
  const showCount = opts.showCount

  const tags = new Map<string, number>()

  // Count all tags across all files, respecting exclusions
  for (const file of allFiles) {
    const fileTags = file.frontmatter?.tags ?? []
    for (const tag of fileTags) {
      const lowerTag = tag?.toLowerCase()
      if (lowerTag && !excludeTagsSet.has(lowerTag)) { // Check tag exists and is not excluded
        tags.set(tag, (tags.get(tag) ?? 0) + 1)
      }
    }
  }

  // Convert map to array of [tag, count] pairs
  const tagEntries = Array.from(tags.entries())

  // Sort the tags by frequency (count) descending
  const sortedByFrequency = tagEntries.sort(([, countA], [, countB]) => countB - countA)

  // Get the top N tags based on the configured limit
  const topNList = sortedByFrequency.slice(0, limit)

  // Don't render if no tags are found after filtering
  if (topNList.length === 0) {
    return null
  }

  const baseDir = pathToRoot(fileData.slug!)
  // Use configured title or i18n default (referencing topTags key), fallback to "Top Tags"
  const componentTitle = opts.title ?? i18n(cfg?.locale).components?.topTags?.title ?? "Top Tags" // Updated i18n key and fallback

  return (
    // Apply 'toc' class for styling, add 'top-tags' class for specific overrides
    <div class={classNames(displayClass, "toc", "top-tags")}> {/* Use top-tags class */}
      {/* Heading style will be inherited from .toc h3 */}
      <h3>{componentTitle}</h3>
      {/* Use 'overflow' class on ul for potential scrolling */}
      <ul class="overflow">
        {topNList.map(([tag, count]) => { // Map over the top N list
          const linkDest = baseDir + `/tags/${slugTag(tag)}`
          return (
            // List item styling will be inherited from .toc ul li
            <li key={tag}>
              {/* Link styling inherited from .toc a */}
              <a href={linkDest} class="internal">
                {tag} {showCount && `(${count})`} {/* Conditionally show count */}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// Assign the MODERN ToC styles to this component
TopTags.css = modernStyle
// No afterDOMLoaded script needed

// Export the component constructor
export default (() => TopTags) satisfies QuartzComponentConstructor