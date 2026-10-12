import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#111827",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(1,193,106,0.28), transparent 45%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#e5e7eb" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#01c16a" }} />
          {profile.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 20, fontSize: 40, color: "#01c16a" }}>{profile.title}</div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#9ca3af" }}>
            React · Next.js · React Native · Node.js · AI integrations
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9ca3af" }}>
          <span>{profile.location}</span>
          <span>github.com/ArvinceRamos</span>
        </div>
      </div>
    ),
    size,
  );
}
