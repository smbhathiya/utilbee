import type { Metadata } from "next"
import { getToolMetadata, getToolJsonLd, getToolBreadcrumbJsonLd } from "@/lib/seo"

const TOOL_ID = "pdf-compressor"

export const metadata: Metadata = getToolMetadata(TOOL_ID)

export default function PdfCompressorLayout({
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
