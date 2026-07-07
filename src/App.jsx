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
      <main className="relative z-10 flex flex-col items-center gap-4 w-full max-w-md">
        <ArcadeButton>Start Game</ArcadeButton>
        <ArcadeButton>Options</ArcadeButton>
        <ArcadeButton>Credits</ArcadeButton>
      </main>
    </div>
  );
}
