import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Fragment, h } from "preact"
import { pathToRoot, slugTag } from "../util/path"
import { i18n } from "../i18n" // Import i18n if you are using it for the title
import modernStyle from "./styles/toc.scss" // Import the modern ToC styles

// Define configuration options (using safe access like before)
interface Options {
  limit: number
  excludeTags: string[]
  // No initialHide needed for non-collapsible version
}

const defaultOptions: Options = {
  limit: 50, // Default limit (changed from 5 based on user's code)
  excludeTags: [], // Default empty exclusion list
}

export const TopTags: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
}: QuartzComponentProps) => {

  // Safely access user-defined options
  const userOpts = cfg?.configuration?.components?.TopTags ?? {}
  // Merge user config with defaults
  const opts = { ...defaultOptions, ...userOpts }

  const limit = opts.limit
  const excludeTagsSet = new Set(opts.excludeTags.map(tag => tag.toLowerCase()))

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

  // Sort tags by frequency descending
  const sortedTags = Array.from(tags.entries()).sort(([, countA], [, countB]) => countB - countA)

  // Get top N tags
  const topTags = sortedTags.slice(0, limit)

  if (topTags.length === 0) {
    return null
  }

  const baseDir = pathToRoot(fileData.slug!)
  // Use i18n if available and configured, otherwise fallback to hardcoded string
  // Using "Tag Directory" as per user's provided code
  const title = i18n(cfg?.locale).components?.topTags?.title ?? "Tag Directory"

  return (
    // Apply 'toc' class for styling, keep 'top-tags' for potential overrides
    // Removed 'popover-hint' as it's associated with the collapsible structure in toc.scss
    <div class={classNames(displayClass, "toc", "top-tags")}>
      {/* Heading style will be inherited from .toc h3 */}
      <h3>{title}</h3>
      {/* Use 'overflow' class on ul for styling from toc.scss */}
      <ul class="overflow">
        {topTags.map(([tag, count]) => {
          const linkDest = baseDir + `/tags/${slugTag(tag)}`
          return (
            // List item styling will be inherited from .toc ul li
            <li key={tag}>
              {/* Link styling inherited from .toc a */}
              <a href={linkDest} class="internal">
                {tag} ({count})
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
// No afterDOMLoaded script needed for this non-collapsible version

export default (() => TopTags) satisfies QuartzComponentConstructor