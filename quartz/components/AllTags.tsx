import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Fragment, h } from "preact"
import { pathToRoot, slugTag } from "../util/path"
import { i18n } from "../i18n"
import modernStyle from "./styles/toc.scss" // Import the modern ToC styles

// Define configuration options
interface Options {
  /** Tags to exclude from the list. */
  excludeTags: string[]
  /** Title for the component. */
  title?: string
  /** Whether to show the count next to each tag. */
  showCount: boolean
}

const defaultOptions: Options = {
  excludeTags: [], // Default empty exclusion list
  title: undefined, // Use i18n default if not set
  showCount: true, // Default to showing counts
}

// Renamed component export
export const AllTags: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
}: QuartzComponentProps) => {

  // Safely access user-defined options using the new component name key
  const userOpts = cfg?.configuration?.components?.AllTags ?? {}
  // Merge user config with defaults
  const opts = { ...defaultOptions, ...userOpts }

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

  // Get unique tag names from the map keys
  const uniqueTags = Array.from(tags.keys())

  // Sort the unique tags alphabetically
  const sortedTags = uniqueTags.sort((a, b) => a.localeCompare(b))

  // Don't render if no tags are found after filtering
  if (sortedTags.length === 0) {
    return null
  }

  const baseDir = pathToRoot(fileData.slug!)
  // Use configured title or i18n default (referencing allTags key), fallback to "Tags"
  const componentTitle = opts.title ?? i18n(cfg?.locale).components?.allTags?.title ?? "All Tags" // Updated i18n key

  return (
    // Apply 'toc' class for styling, use new 'all-tags' class for specific overrides
    <div class={classNames(displayClass, "toc", "all-tags")}> {/* Updated CSS class */}
      {/* Heading style will be inherited from .toc h3 */}
      <h3>{componentTitle}</h3>
      {/* Use 'overflow' class on ul for potential scrolling if list is long */}
      <ul class="overflow">
        {sortedTags.map((tag) => { // Map over the alphabetically sorted tag names
          const linkDest = baseDir + `/tags/${slugTag(tag)}`
          const count = tags.get(tag)! // Get the count from the original map
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
AllTags.css = modernStyle // Assign style to the new component name
// No afterDOMLoaded script needed

// Update the default export
export default (() => AllTags) satisfies QuartzComponentConstructor