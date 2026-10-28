import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Dr. Jorge Naveda, traumatólogo en Lima";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const symbol = `data:image/svg+xml;base64,${readFileSync(
  join(process.cwd(), "public/brand/simbolo-rodilla.svg"),
).toString("base64")}`;

/* Fuente por defecto de next/og: no se descarga Sora en el build. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#215da8",
          color: "#fcfeff",
          padding: "72px 88px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 740 }}>
          <div style={{ fontSize: 34, color: "#d4ebfe", display: "flex" }}>
            {site.doctor.title}
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              marginTop: 20,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{ marginRight: 22 }}>Tu bienestar</span>
            <span style={{ marginRight: 22 }}>es mi</span>
            <span style={{ color: "#68cc5f" }}>prioridad</span>
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, marginTop: 40, display: "flex" }}>
            {site.doctor.name}
          </div>
          <div style={{ fontSize: 28, color: "#d4ebfe", marginTop: 8, display: "flex" }}>
            {site.doctor.specialty}
          </div>
        </div>
        <div
          style={{
            width: 400,
            height: 400,
            borderRadius: 200,
            background: "#f7fbff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={symbol} width={170} height={303} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
