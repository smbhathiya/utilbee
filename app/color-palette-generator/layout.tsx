import type { Metadata } from "next"
import { getToolMetadata, getToolJsonLd, getToolBreadcrumbJsonLd } from "@/lib/seo"

const TOOL_ID = "color-palette-generator"

export const metadata: Metadata = getToolMetadata(TOOL_ID)

export default function ColorPaletteGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = getToolJsonLd(TOOL_ID)
  const breadcrumbJsonLd = getToolBreadcrumbJsonLd(TOOL_ID)

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {children}
    </>
  )
}
