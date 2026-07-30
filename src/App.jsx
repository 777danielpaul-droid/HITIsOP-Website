import { useState } from "react";
import ArcadeButton from "./ArcadeButton";

/* ------------------------------------------------------------------
   Effekt-Daten (datengetrieben statt hunderte handkopierter Divs)
------------------------------------------------------------------ */

// Digitaler Neon-Regen: 8 türkise + 8 lila Tropfen (Prozent-Positionen = responsive)
const RAIN_DROPS = [
  { color: "tiffany", left: "5%", delay: "0s", dur: "0.8s" },
  { color: "tiffany", left: "15%", delay: "0.4s", dur: "1.2s" },
  { color: "tiffany", left: "30%", delay: "0.2s", dur: "0.9s" },
  { color: "tiffany", left: "45%", delay: "0.7s", dur: "1.4s" },
  { color: "tiffany", left: "60%", delay: "0.1s", dur: "1.1s" },
  { color: "tiffany", left: "75%", delay: "0.5s", dur: "0.7s" },
  { color: "tiffany", left: "88%", delay: "0.3s", dur: "1.3s" },
  { color: "tiffany", left: "95%", delay: "0.6s", dur: "1.0s" },
  { color: "purple", left: "10%", delay: "0.2s", dur: "1.1s" },
  { color: "purple", left: "22%", delay: "0.6s", dur: "0.8s" },
  { color: "purple", left: "38%", delay: "0.1s", dur: "1.3s" },
  { color: "purple", left: "52%", delay: "0.5s", dur: "0.9s" },
  { color: "purple", left: "68%", delay: "0.3s", dur: "1.2s" },
  { color: "purple", left: "80%", delay: "0.7s", dur: "1.0s" },
  { color: "purple", left: "91%", delay: "0.0s", dur: "1.4s" },
  { color: "purple", left: "97%", delay: "0.4s", dur: "0.7s" },
];

// Japanischer Matrix-Regen. `pos` in Prozent => skaliert mit dem Viewport,
// sitzt nie am absoluten Rand (kein Rand-Strich mehr). `hideMobile` blendet
// die inneren Spalten auf kleinen Screens aus, damit sie die Buttons nicht überlagern.
const MATRIX_COLUMNS = [
  {
    side: "left",
    pos: "3%",
    color: "tiffany",
    size: "text-base md:text-lg",
    dur: "4s",
    delay: "0s",
    chars: "システムオーバーロード",
  },
  {
    side: "left",
    pos: "9%",
    color: "purple",
    size: "text-xl md:text-3xl",
    dur: "6.5s",
    delay: "2s",
    chars: "攻撃デジタルライズ",
  },
  {
    side: "left",
    pos: "15%",
    color: "tiffany",
    size: "text-sm",
    dur: "3.2s",
    delay: "0.8s",
    chars: "ネオトウキョウ",
    hideMobile: true,
  },
  {
    side: "right",
    pos: "3%",
    color: "purple",
    size: "text-lg md:text-2xl",
    dur: "5s",
    delay: "0.4s",
    chars: "エナジーマックス",
  },
  {
    side: "right",
    pos: "9%",
    color: "tiffany",
    size: "text-xl md:text-3xl",
    dur: "7.5s",
    delay: "3.5s",
    chars: "終了コードコア",
  },
  {
    side: "right",
    pos: "15%",
    color: "purple",
    size: "text-sm",
    dur: "4.2s",
    delay: "1.7s",
    chars: "サイバーパンク世代",
    hideMobile: true,
  },
];

const SOCIALS = [
  {
    href: "https://youtube.com/@deinkanal",
    label: "YouTube",
    theme: "social-youtube",
    viewBox: "0 0 24 24",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    iconClass: "w-6 h-6",
  },
  {
    href: "https://tiktok.com/@deinkanal",
    label: "TikTok",
    theme: "social-tiktok",
    viewBox: "0 0 24 24",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.23.86.99 2.07 1.67 3.4 1.91v3.7c-1.74-.08-3.41-.74-4.73-1.89-.13-.1-.23-.23-.39-.4v6.11c-.01 2.34-.96 4.57-2.65 6.19-2.2 2.1-5.46 2.76-8.31 1.65-2.85-1.1-4.81-3.89-4.94-6.97-.18-3.45 2.11-6.62 5.48-7.38.74-.17 1.51-.2 2.26-.1v3.66c-.53-.08-1.07-.05-1.59.08-1.57.4-2.67 1.89-2.59 3.5.07 1.48 1.14 2.76 2.61 2.99 1.48.24 2.94-.65 3.32-2.1.1-.38.13-.78.12-1.18V.02z",
    iconClass: "w-5 h-5",
  },
  {
    href: "https://x.com/deinkanal",
    label: "X",
    theme: "social-x",
    viewBox: "0 0 24 24",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    iconClass: "w-5 h-5",
  },
  {
    href: "https://api.whatsapp.com/send?text=Schau%20dir%20dieses%20brutale%20Arcade-Spiel%20an!%20HIT%20IS%20OP!",
    label: "WhatsApp",
    theme: "social-whatsapp",
    viewBox: "0 0 24 24",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    iconClass: "w-5 h-5",
  },
];

export default function App() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    setIsMuted(!isMuted);
    console.log("Sound-Toggle (Audio noch nicht implementiert)");
  };

  return (
    <div className="fixed inset-0 bg-[#05010c] flex flex-col items-center justify-start p-4 md:p-6 text-white font-audiowide overflow-hidden isolate">
      {/* 1. CRT-Röhren-Scanlines */}
      <div className="crt-scanlines" aria-hidden="true" />

      {/* 2. Permanentes Umgebungs-Flimmern (tiefster Hintergrund) */}
      <div className="ambient-sky-flicker" aria-hidden="true" />

      {/* 3. Cyberpunk-Doppelregen (türkis + lila) */}
      <div className="fx-layer" aria-hidden="true">
        {RAIN_DROPS.map((d, i) => (
          <div
            key={i}
            className={`rain-drop rain-${d.color}`}
            style={{
              left: d.left,
              animationDelay: d.delay,
              animationDuration: d.dur,
            }}
          />
        ))}
      </div>

      {/* 4. Japanischer Matrix-Regen (responsive Prozent-Spalten) */}
      <div className="fx-layer font-dotgothic select-none" aria-hidden="true">
        {MATRIX_COLUMNS.map((c, i) => (
          <div
            key={i}
            className={`matrix-column matrix-${c.color} ${c.size} ${c.hideMobile ? "hidden md:flex" : ""}`}
            style={{
              [c.side]: c.pos,
              animationDuration: c.dur,
              animationDelay: c.delay,
            }}
          >
            {[...c.chars].map((ch, j) => (
              <span key={j}>{ch}</span>
            ))}
          </div>
        ))}
      </div>

      {/* 5. Glitch-Hintergrundbild */}
      <div className="glitch-bg" aria-hidden="true">
        <img
          src="/cover.png"
          alt="Arcade Background"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#9400d3]/30 via-transparent to-[#05010c]/90" />
      </div>

      {/* 6. SVG-Blitz-System */}
      <div className="lightning-container" aria-hidden="true">
        <svg
          className="lightning-svg main-bolt"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="lightning-distortion">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.05 0.15"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="20"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            <filter id="brush-edges">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8 0.1"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="9"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <path
            className="main-stream"
            d="M 42 0 L 25 150 L 58 320 L 38 500 L 62 680 L 48 850 L 52 1000"
          />
          <path
            className="sub-branch"
            d="M 45 150 L 20 230 M 38 500 L 75 610 M 48 850 L 25 930"
          />
        </svg>

        <svg
          className="lightning-svg branch-bolt"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          <path d="M 50 0 L 60 200 L 35 450 L 65 700 L 40 880 L 50 1000" />
        </svg>
      </div>

      {/* 7. Titel als Button */}
      <header className="relative z-10 text-center mt-8 md:mt-12">
        <button
          onClick={() => console.log("Titel-Aktion ausgelöst!")}
          className="glitch-button-wrapper mx-auto select-none px-2"
          aria-label="HIT IS OP - Titel-Aktion"
        >
          <div className="glitch-content">
            <h1 className="sf-arcade-title text-5xl sm:text-6xl md:text-8xl italic tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[var(--tiffany)] to-[var(--purple)] scale-y-125 md:scale-x-200 md:scale-y-150 origin-center inline-block whitespace-nowrap">
              HIT IS OP
            </h1>
            <p className="neon-blink-tiffany mt-8 md:mt-12 text-xs md:text-sm font-dotgothic">
              Aura // Over 9K
            </p>
          </div>
        </button>
      </header>

      {/* 8. Buttons */}
      <main className="relative z-10 flex flex-col items-center gap-5 w-full max-w-[260px] sm:max-w-md mt-[15vh] md:mt-[25vh]">
        <a
          href="https://coldasic3.itch.io/h1tisop"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <ArcadeButton>Scratch-Game</ArcadeButton>
        </a>

        <ArcadeButton>Unity-game</ArcadeButton>
        <ArcadeButton>Rage-Game</ArcadeButton>

        <ArcadeButton id="music-toggle-btn" onClick={toggleSound}>
          {isMuted ? "Sound: OFF" : "Sound: ON"}
        </ArcadeButton>
      </main>

      {/* 9. Social-Footer */}
      <footer className="relative z-10 mt-auto pt-16 pb-6 flex flex-wrap justify-center gap-12 md:gap-48 select-none w-full px-4">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`social-icon ${s.theme} w-12 h-12 flex items-center justify-center border-2 bg-transparent transition-all duration-300 ease-out -skew-x-12 scale-75 md:scale-100 hover:scale-110 group/icon`}
          >
            <svg
              className={`${s.iconClass} skew-x-12 fill-current transition-transform duration-300 group-hover/icon:scale-110`}
              viewBox={s.viewBox}
            >
              <path d={s.icon} />
            </svg>
          </a>
        ))}
      </footer>
    </div>
  );
}
