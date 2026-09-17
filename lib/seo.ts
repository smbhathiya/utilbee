import type { Metadata } from "next"
import type { SoftwareApplication, WithContext, BreadcrumbList, WebSite } from "schema-dts"

export const SITE_CONFIG = {
  name: "UtilBEE",
  shortName: "UtilBEE",
  title: "UtilBEE - Privacy-First Online Web Tools Suite",
  description:
    "100% free & client-side online web tools suite for PDF operations, image compression, QR code generation, favicon studio, developer utilities, and health metrics. No file uploads or signup required.",
  url: "https://utilbee.bhathiya.dev",
  ogImage: "https://utilbee.bhathiya.dev/og-image.png",
  author: "Bhathiya",
  authorUrl: "https://bhathiya.dev",
  twitterHandle: "@bhathiyadev",
  keywords: [
    "online web tools",
    "free pdf tools",
    "pdf merger",
    "pdf splitter",
    "pdf compressor",
    "pdf organizer",
    "image compressor",
    "image converter",
    "favicon generator",
    "qr code generator",
    "barcode generator",
    "guid generator",
    "uuid generator",
    "password generator",
    "color palette generator",
    "svg blob generator",
    "base64 encoder",
    "hash generator",
    "json formatter",
    "bmi calculator",
    "age calculator",
    "water intake calculator",
    "ideal body weight",
    "pregnancy due date calculator",
    "privacy-first web tools",
    "client-side utilities",
    "utilbee",
  ],
}

export interface ToolSeoData {
  id: string
  name: string
  title: string
  description: string
  keywords: string[]
  category: "document" | "media" | "generators" | "developer" | "health"
  applicationCategory: string
  path: string
}

export const TOOL_SEO_MAP: Record<string, ToolSeoData> = {
  // Document Tools
  "pdf-organizer": {
    id: "pdf-organizer",
    name: "PDF Split & Merge Studio",
    title: "PDF Split & Merge Studio - Reorder, Rotate & Combine PDFs Online",
    description:
      "Visual PDF organizer: reorder pages, rotate orientation, delete pages, extract, and merge multiple PDF documents and images directly in your browser.",
    keywords: [
      "pdf organizer",
      "pdf studio",
      "reorder pdf pages",
      "rotate pdf",
      "visual pdf editor",
      "combine pdfs and images",
      "client-side pdf tool",
    ],
    category: "document",
    applicationCategory: "BusinessApplication",
    path: "/pdf-organizer",
  },
  "image-to-pdf": {
    id: "image-to-pdf",
    name: "Image to PDF Converter",
    title: "Free Image to PDF Converter - Convert JPG, PNG, WEBP to PDF",
    description:
      "Convert multiple images (JPG, PNG, WEBP, GIF, BMP) into a single high-quality PDF document instantly with custom page sizing and reordering.",
    keywords: [
      "image to pdf",
      "jpg to pdf",
      "png to pdf",
      "convert photos to pdf",
      "photo to pdf converter",
      "batch image to pdf",
    ],
    category: "document",
    applicationCategory: "MultimediaApplication",
    path: "/image-to-pdf",
  },
  "pdf-merger": {
    id: "pdf-merger",
    name: "PDF Merger",
    title: "PDF Merger - Combine Multiple PDF Files Online Free",
    description:
      "Merge multiple PDF documents into one seamless file with drag-and-drop ordering. Fast, 100% private, client-side processing with no upload limit.",
    keywords: [
      "pdf merger",
      "merge pdf",
      "combine pdf files",
      "join pdf",
      "free pdf joiner",
      "merge pdf documents online",
    ],
    category: "document",
    applicationCategory: "UtilitiesApplication",
    path: "/pdf-merger",
  },
  "pdf-splitter": {
    id: "pdf-splitter",
    name: "PDF Splitter",
    title: "PDF Splitter - Extract Pages & Split PDF Online",
    description:
      "Extract single pages, custom ranges, or split PDF files into separate documents instantly without uploading files to any server.",
    keywords: [
      "pdf splitter",
      "split pdf",
      "extract pdf pages",
      "separate pdf",
      "cut pdf pages",
      "free pdf splitter",
    ],
    category: "document",
    applicationCategory: "UtilitiesApplication",
    path: "/pdf-splitter",
  },
  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    title: "PDF Compressor - Reduce PDF File Size Online Free",
    description:
      "Optimize PDF object streams and reduce PDF file size up to 70% while maintaining crisp document readability. Client-side, fast, and secure.",
    keywords: [
      "pdf compressor",
      "compress pdf",
      "reduce pdf file size",
      "shrink pdf",
      "optimize pdf online",
      "free pdf compressor",
    ],
    category: "document",
    applicationCategory: "UtilitiesApplication",
    path: "/pdf-compressor",
  },
  "pdf-link-editor": {
    id: "pdf-link-editor",
    name: "PDF Link Editor",
    title: "PDF Link Editor - Add Clickable Hyperlinks to PDF Online",
    description:
      "Draw clickable hotspot boxes onto any PDF page and embed external web links or email addresses seamlessly in your browser.",
    keywords: [
      "pdf link editor",
      "add hyperlink to pdf",
      "clickable pdf links",
      "embed url in pdf",
      "pdf hotspot editor",
    ],
    category: "document",
    applicationCategory: "UtilitiesApplication",
    path: "/pdf-link-editor",
  },

  // Media Tools
  "image-converter": {
    id: "image-converter",
    name: "Any Image Converter",
    title: "Any Image Converter - Convert PNG, JPG, WEBP, SVG & GIF Online",
    description:
      "Universal client-side image format converter. Convert PNG, JPG, WEBP, BMP, GIF, and SVG with adjustable quality presets and zero cloud uploads.",
    keywords: [
      "image converter",
      "png to jpg",
      "jpg to webp",
      "webp to png",
      "svg to png",
      "batch image converter",
      "client-side image converter",
    ],
    category: "media",
    applicationCategory: "MultimediaApplication",
    path: "/image-converter",
  },
  "image-compressor": {
    id: "image-compressor",
    name: "Image Size Reducer",
    title: "Image Size Reducer - Compress JPG, PNG & WEBP Online",
    description:
      "Smart client-side image compression tool. Shrink file sizes by up to 90% without visible quality loss for faster websites and smaller storage.",
    keywords: [
      "image compressor",
      "compress images online",
      "reduce photo size",
      "shrink jpg",
      "png compressor",
      "lossless image compression",
    ],
    category: "media",
    applicationCategory: "MultimediaApplication",
    path: "/image-compressor",
  },

  // Generators
  "favicon-generator": {
    id: "favicon-generator",
    name: "Favicon & App Icon Studio",
    title: "Favicon & App Icon Studio - Generate favicon.ico, Apple Touch & Manifest",
    description:
      "Create complete modern favicon suites from images, text, or emojis. Generates multi-size favicon.ico, 192x192, 512x512 PNGs, site.webmanifest, and ready-to-use HTML tags.",
    keywords: [
      "favicon generator",
      "app icon generator",
      "favicon.ico generator",
      "apple touch icon maker",
      "web manifest generator",
      "emoji favicon maker",
    ],
    category: "generators",
    applicationCategory: "DesignApplication",
    path: "/favicon-generator",
  },
  "qr-generator": {
    id: "qr-generator",
    name: "QR Generator",
    title: "Free QR Code Generator - Generate High-Resolution QR Codes",
    description:
      "Generate customizable, high-resolution QR codes for websites, plain text, Wi-Fi networks, and contact info. Instant PNG download with no expiration.",
    keywords: [
      "qr code generator",
      "qr maker",
      "create qr code",
      "free qr generator",
      "high resolution qr code",
      "custom qr code maker",
    ],
    category: "generators",
    applicationCategory: "UtilitiesApplication",
    path: "/qr-generator",
  },
  "barcode-generator": {
    id: "barcode-generator",
    name: "Barcode Generator",
    title: "Free Barcode Generator - Create Code128, EAN & UPC Barcodes",
    description:
      "Create standard linear barcodes (Code 128, EAN-13, UPC-A, CODE 39) with custom dimensions and download high-resolution SVGs or PNGs.",
    keywords: [
      "barcode generator",
      "code 128 barcode",
      "ean 13 generator",
      "upc generator",
      "create barcode online",
      "free barcode maker",
    ],
    category: "generators",
    applicationCategory: "UtilitiesApplication",
    path: "/barcode-generator",
  },
  "guid-generator": {
    id: "guid-generator",
    name: "GUID / UUID Generator",
    title: "GUID / UUID Generator - Bulk RFC4122 v4 UUIDs Online",
    description:
      "Generate cryptographically secure random UUID v4 / GUID identifiers in bulk. Choose uppercase, lowercase, hyphens, braces, and instant clipboard copy.",
    keywords: [
      "uuid generator",
      "guid generator",
      "uuid v4 online",
      "bulk uuid generator",
      "random guid maker",
      "rfc4122 uuid",
    ],
    category: "generators",
    applicationCategory: "DeveloperApplication",
    path: "/guid-generator",
  },
  "password-generator": {
    id: "password-generator",
    name: "Password Generator",
    title: "Strong Password Generator - Secure & Cryptographically Random",
    description:
      "Create ultra-secure, cryptographically strong passwords and passphrases with custom length, symbols, numbers, and entropy calculation.",
    keywords: [
      "password generator",
      "strong password maker",
      "random password generator",
      "secure password generator",
      "passphrase generator",
      "password strength checker",
    ],
    category: "generators",
    applicationCategory: "SecurityApplication",
    path: "/password-generator",
  },
  "color-palette-generator": {
    id: "color-palette-generator",
    name: "Color Palette Generator",
    title: "Color Palette Generator - Harmonic Color Schemes & Contrast",
    description:
      "Generate aesthetic color palettes using color theory harmonies (monochromatic, analogous, complementary, triadic) with WCAG contrast ratios and HEX/RGB/HSL export.",
    keywords: [
      "color palette generator",
      "color scheme maker",
      "hex color palette",
      "color theory generator",
      "wcag contrast checker",
      "designer color palette",
    ],
    category: "generators",
    applicationCategory: "DesignApplication",
    path: "/color-palette-generator",
  },
  "blob-generator": {
    id: "blob-generator",
    name: "SVG Blob Generator",
    title: "SVG Blob Generator - Organic Vector Shapes & Gradients",
    description:
      "Design organic, smooth SVG blob shapes with adjustable complexity, randomness, gradient fills, and export clean SVG code or PNG files.",
    keywords: [
      "svg blob generator",
      "organic shape maker",
      "vector blob creator",
      "svg shape generator",
      "gradient blob maker",
    ],
    category: "generators",
    applicationCategory: "DesignApplication",
    path: "/blob-generator",
  },

  // Developer Tools
  "base64-coder": {
    id: "base64-coder",
    name: "Base64 Encoder / Decoder",
    title: "Base64 Encoder & Decoder - Encode & Decode Text Online",
    description:
      "Fast, private Base64 string encoding and decoding with UTF-8 character support, URL-safe mode, formatting options, and live diff preview.",
    keywords: [
      "base64 encoder",
      "base64 decoder",
      "base64 string converter",
      "utf8 base64",
      "url safe base64",
      "decode base64 online",
    ],
    category: "developer",
    applicationCategory: "DeveloperApplication",
    path: "/base64-coder",
  },
  "hash-generator": {
    id: "hash-generator",
    name: "Hash Generator",
    title: "Hash Generator - SHA-256, SHA-512, MD5 & SHA-1 Online",
    description:
      "Generate cryptographic hashes (SHA-256, SHA-512, SHA-384, SHA-1, MD5) for any text securely in your browser using the Web Cryptography API.",
    keywords: [
      "hash generator",
      "sha256 generator",
      "sha512 online",
      "sha1 hash",
      "crypto hash generator",
      "checksum calculator",
    ],
    category: "developer",
    applicationCategory: "DeveloperApplication",
    path: "/hash-generator",
  },
  "json-formatter": {
    id: "json-formatter",
    name: "JSON Formatter & Tree",
    title: "JSON Formatter & Validator - Pretty Print, Minify & Inspect JSON",
    description:
      "Format, validate, repair, minify, and inspect JSON documents with interactive tree view, syntax error detection, search, and instant copying.",
    keywords: [
      "json formatter",
      "json validator",
      "pretty print json",
      "json viewer",
      "json tree editor",
      "minify json online",
      "json beautifier",
    ],
    category: "developer",
    applicationCategory: "DeveloperApplication",
    path: "/json-formatter",
  },

  // Health Tools
  "bmi-calculator": {
    id: "bmi-calculator",
    name: "BMI Calculator",
    title: "BMI Calculator - Free Body Mass Index & Healthy Weight Range",
    description:
      "Calculate your Body Mass Index (BMI) using metric or imperial units. Get instant WHO category classifications, ideal weight target, and health tips.",
    keywords: [
      "bmi calculator",
      "body mass index",
      "healthy weight calculator",
      "bmi chart",
      "calculate bmi online",
      "metric imperial bmi",
    ],
    category: "health",
    applicationCategory: "HealthApplication",
    path: "/bmi-calculator",
  },
  "age-calculator": {
    id: "age-calculator",
    name: "Age Calculator",
    title: "Age Calculator - Exact Chronological Age & Birthday Countdown",
    description:
      "Calculate your precise age in years, months, weeks, days, hours, and minutes with next birthday countdown and interesting life milestones.",
    keywords: [
      "age calculator",
      "calculate age online",
      "exact age in days",
      "next birthday countdown",
      "chronological age calculator",
      "date of birth calculator",
    ],
    category: "health",
    applicationCategory: "HealthApplication",
    path: "/age-calculator",
  },
  "water-intake": {
    id: "water-intake",
    name: "Water Intake Calculator",
    title: "Daily Water Intake Calculator - Hydration Target by Weight & Activity",
    description:
      "Calculate your personalized daily hydration requirement based on body weight, climate conditions, and exercise activity levels.",
    keywords: [
      "water intake calculator",
      "daily hydration goal",
      "how much water to drink",
      "hydration calculator",
      "water drinking target",
    ],
    category: "health",
    applicationCategory: "HealthApplication",
    path: "/water-intake",
  },
  "ideal-weight": {
    id: "ideal-weight",
    name: "Ideal Body Weight Calculator",
    title: "Ideal Body Weight Calculator - Clinical Formulas (Devine, Robinson, Miller)",
    description:
      "Calculate your ideal healthy body weight range across proven clinical medical formulas (Devine, Robinson, Miller, and Hamwi equations).",
    keywords: [
      "ideal weight calculator",
      "devine formula",
      "ideal body weight",
      "target weight calculator",
      "healthy weight formula",
    ],
    category: "health",
    applicationCategory: "HealthApplication",
    path: "/ideal-weight",
  },
  "pregnancy-due-date": {
    id: "pregnancy-due-date",
    name: "Pregnancy Due Date Calculator",
    title: "Pregnancy Due Date Calculator - Estimated Delivery & Trimester Timeline",
    description:
      "Estimate your baby's due date based on Last Menstrual Period (LMP) or conception date with complete trimester breakdown and weekly milestones.",
    keywords: [
      "pregnancy due date calculator",
      "due date calculator",
      "trimester calculator",
      "baby due date",
      "pregnancy timeline",
      "lmp calculator",
    ],
    category: "health",
    applicationCategory: "HealthApplication",
    path: "/pregnancy-due-date",
  },
}

export function constructMetadata(
  custom: {
    title?: string
    description?: string
    keywords?: string[]
    path?: string
    ogImage?: string
    noIndex?: boolean
  } = {}
): Metadata {
  const url = custom.path ? `${SITE_CONFIG.url}${custom.path}` : SITE_CONFIG.url
  const title = custom.title ? `${custom.title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title
  const description = custom.description || SITE_CONFIG.description
  const keywords = custom.keywords ? [...custom.keywords, ...SITE_CONFIG.keywords] : SITE_CONFIG.keywords
  const ogImage = custom.ogImage || SITE_CONFIG.ogImage

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: custom.title || {
      default: SITE_CONFIG.title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.authorUrl }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    alternates: {
      canonical: url,
    },
    robots: custom.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_CONFIG.name,
      title: custom.title || SITE_CONFIG.name,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: custom.title ? `${custom.title} - ${SITE_CONFIG.name}` : SITE_CONFIG.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: custom.title || SITE_CONFIG.name,
      description,
      creator: SITE_CONFIG.twitterHandle,
      images: [ogImage],
    },
  }
}

export function getToolMetadata(toolId: string): Metadata {
  const tool = TOOL_SEO_MAP[toolId]
  if (!tool) {
    return constructMetadata()
  }

  return constructMetadata({
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    path: tool.path,
  })
}

export function getToolJsonLd(toolId: string): WithContext<SoftwareApplication> | null {
  const tool = TOOL_SEO_MAP[toolId]
  if (!tool) return null

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    headline: tool.title,
    description: tool.description,
    url: `${SITE_CONFIG.url}${tool.path}`,
    applicationCategory: tool.applicationCategory,
    operatingSystem: "All (Web Browser)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/icon.svg`,
    },
    softwareRequirements: "Requires WebAssembly & Modern JavaScript Support",
    softwareVersion: "1.5.2",
    inLanguage: "en-US",
  }
}

export function getToolBreadcrumbJsonLd(toolId: string): WithContext<BreadcrumbList> | null {
  const tool = TOOL_SEO_MAP[toolId]
  if (!tool) return null

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.name,
        item: `${SITE_CONFIG.url}${tool.path}`,
      },
    ],
  }
}

export function getWebsiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/icon.svg`,
    },
  }
}
