import ArcadeButton from "./ArcadeButton";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05010c] flex flex-col items-center justify-start p-6 text-white font-audiowide overflow-hidden">
      {/* 1. CRT Scanlines Röhren-Effekt */}
      <div className="crt-scanlines" />

      {/* 2. Hintergrund-Container mit dem synchronisierten Glitch-Bild */}
      <div className="glitch-bg absolute inset-0 w-full h-full pointer-events-none z-1">
        <img
          src="/cover.png"
          alt="Arcade Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dunkler Neon-Verlauf direkt über dem Bild für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#9400d3]/30 via-transparent to-[#05010c]/90" />
      </div>

      {/* 3. Das SVG-Blitz-System */}
      <div className="lightning-container">
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

      {/* 4. Interface Content - PERFEKT CODESYNCHRONISIERTER TEXT GLITCH */}
      <header className="glitch-text-wrapper relative mt-8 mb-12 text-center z-10 select-none">
        <h1 className="sf-arcade-title text-6xl md:text-8xl font-black italic tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#00f3ff] to-[#9400d3]">
          HIT IS OP
        </h1>
        <p className="neon-blink-tiffany mt-4 text-sm font-dotgothic">
          ⚡ SYSTEM OVERLOAD // ENERGY: 100%
        </p>
      </header>

      {/* 5. Buttons / Hauptinhalt */}
      <main className="relative z-10 flex flex-col items-center gap-4 w-full max-w-md mt-48">
        <ArcadeButton>Story-Mode</ArcadeButton>
        <ArcadeButton>2P-Mode</ArcadeButton>
        <ArcadeButton>Options</ArcadeButton>
      </main>

      {/* 6. NEU: Social Media Footer-Leiste mit echten Neon-SVGs */}
      <footer className="relative z-10 mt-auto pt-12 pb-4 flex flex-wrap justify-center gap-6 select-none">
        {/* YouTube Icon - JETZT IM HARMONISCHEN RETRO-LILA */}
        <a
          href="https://youtube.com/@deinkanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#7a00cc] text-[#a133ff] bg-transparent shadow-[0_0_10px_rgba(122,0,204,0.3)] hover:shadow-[0_0_20px_#a133ff] hover:bg-[#a133ff] hover:text-[#05010c] transition-all duration-200 -skew-x-12 group/icon"
        >
          <svg
            className="w-6 h-6 skew-x-12 fill-current transition-transform group-hover/icon:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* TikTok Icon */}
        <a
          href="https://tiktok.com/@deinkanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#00f3ff] text-[#00f3ff] bg-transparent shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_20px_#00f3ff] hover:bg-[#00f3ff] hover:text-[#05010c] transition-all duration-200 -skew-x-12 group/icon"
        >
          <svg
            className="w-5 h-5 skew-x-12 fill-current transition-transform group-hover/icon:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.23.86.99 2.07 1.67 3.4 1.91v3.7c-1.74-.08-3.41-.74-4.73-1.89-.13-.1-.23-.23-.39-.4v6.11c-.01 2.34-.96 4.57-2.65 6.19-2.2 2.1-5.46 2.76-8.31 1.65-2.85-1.1-4.81-3.89-4.94-6.97-.18-3.45 2.11-6.62 5.48-7.38.74-.17 1.51-.2 2.26-.1v3.66c-.53-.08-1.07-.05-1.59.08-1.57.4-2.67 1.89-2.59 3.5.07 1.48 1.14 2.76 2.61 2.99 1.48.24 2.94-.65 3.32-2.1.1-.38.13-.78.12-1.18V.02z" />
          </svg>
        </a>

        {/* X (ehemals Twitter) Icon */}
        <a
          href="https://x.com/deinkanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#9400d3] text-[#9400d3] bg-transparent shadow-[0_0_10px_rgba(148,0,211,0.3)] hover:shadow-[0_0_20px_#9400d3] hover:bg-[#9400d3] hover:text-[#05010c] transition-all duration-200 -skew-x-12 group/icon"
        >
          <svg
            className="w-5 h-5 skew-x-12 fill-current transition-transform group-hover/icon:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* WhatsApp Share-Icon */}
        <a
          href="https://api.whatsapp.com/send?text=Schau%20dir%20dieses%20brutale%20Arcade-Spiel%20an!%20HIT%20IS%20OP!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#25D366] text-[#25D366] bg-transparent shadow-[0_0_10px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_#25D366] hover:bg-[#25D366] hover:text-[#05010c] transition-all duration-200 -skew-x-12 group/icon"
        >
          <svg
            className="w-5 h-5 skew-x-12 fill-current transition-transform group-hover/icon:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}
