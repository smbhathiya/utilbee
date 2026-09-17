import { ImageResponse } from "next/og"
import { SITE_CONFIG } from "@/lib/seo"

export const alt = "UtilBEE - Privacy-First Online Web Tools Suite"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            borderRadius: "100%",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2))",
            filter: "blur(80px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            fontSize: "18px",
            fontWeight: 500,
            color: "#a1a1aa",
            marginBottom: "28px",
          }}
        >
          100% Client-Side & Free
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            background: "linear-gradient(to right, #ffffff, #e4e4e7, #a1a1aa)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "18px",
            textAlign: "center",
          }}
        >
          {SITE_CONFIG.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: 400,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
            marginBottom: "40px",
          }}
        >
          All-in-one suite for PDF editing, image conversion, QR/barcode generation, developer utilities & health metrics.
        </div>

        {/* Pill tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {["PDF Tools", "Image Compressor", "QR & Barcode", "Favicon Studio", "Dev Utilities", "Health Tools"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  fontSize: "16px",
                  color: "#d4d4d8",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
