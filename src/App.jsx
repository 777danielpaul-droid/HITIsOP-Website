import { useState, useRef, useEffect } from "react";
import ArcadeButton from "./ArcadeButton";

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/bg-music.mp3");
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05010c] flex flex-col items-center justify-between p-6 text-white font-audiowide overflow-hidden">
      {/* 1. CRT Scanlines Röhren-Effekt */}
      <div className="crt-scanlines" />

      {/* Das permanente Umgebungs-Flimmern im tiefen Hintergrund */}
      <div className="ambient-sky-flicker" />

      {/* Cyberpunk-Doppelregen Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-5">
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "5%",
            animationDelay: "0s",
            animationDuration: "0.8s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "15%",
            animationDelay: "0.4s",
            animationDuration: "1.2s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "30%",
            animationDelay: "0.2s",
            animationDuration: "0.9s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "45%",
            animationDelay: "0.7s",
            animationDuration: "1.4s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "60%",
            animationDelay: "0.1s",
            animationDuration: "1.1s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "75%",
            animationDelay: "0.5s",
            animationDuration: "0.7s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "88%",
            animationDelay: "0.3s",
            animationDuration: "1.3s",
          }}
        />
        <div
          className="rain-drop rain-tiffany"
          style={{
            left: "95%",
            animationDelay: "0.6s",
            animationDuration: "1.0s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "10%",
            animationDelay: "0.2s",
            animationDuration: "1.1s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "22%",
            animationDelay: "0.6s",
            animationDuration: "0.8s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "38%",
            animationDelay: "0.1s",
            animationDuration: "1.3s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "52%",
            animationDelay: "0.5s",
            animationDuration: "0.9s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "68%",
            animationDelay: "0.3s",
            animationDuration: "1.2s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "80%",
            animationDelay: "0.7s",
            animationDuration: "1.0s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "91%",
            animationDelay: "0.0s",
            animationDuration: "1.4s",
          }}
        />
        <div
          className="rain-drop rain-purple"
          style={{
            left: "97%",
            animationDelay: "0.4s",
            animationDuration: "0.7s",
          }}
        />
      </div>

      {/* MATRIX-REGEN */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-5 font-dotgothic select-none">
        <div
          className="matrix-column matrix-tiffany text-lg"
          style={{ left: "0px", animationDuration: "4s", animationDelay: "0s" }}
        >
          <span>シ</span>
          <span>ス</span>
          <span>テ</span>
          <span>ム</span>
          <span>オ</span>
          <span>ー</span>
          <span>バ</span>
          <span>ー</span>
          <span>ロ</span>
          <span>ー</span>
          <span>ド</span>
        </div>
        <div
          className="matrix-column matrix-purple text-3xl"
          style={{
            left: "55px",
            animationDuration: "6.5s",
            animationDelay: "2s",
          }}
        >
          <span>攻</span>
          <span>撃</span>
          <span>デ</span>
          <span>ジ</span>
          <span>タ</span>
          <span>ル</span>
          <span>ラ</span>
          <span>イ</span>
          <span>ズ</span>
        </div>
        <div
          className="matrix-column matrix-tiffany text-sm"
          style={{
            left: "110px",
            animationDuration: "3.2s",
            animationDelay: "0.8s",
          }}
        >
          <span>ネ</span>
          <span>オ</span>
          <span>ト</span>
          <span>ウ</span>
          <span>キ</span>
          <span>ョ</span>
          <span>ウ</span>
        </div>
        <div
          className="matrix-column matrix-purple text-2xl"
          style={{
            right: "0px",
            animationDuration: "5s",
            animationDelay: "0.4s",
          }}
        >
          <span>エ</span>
          <span>ナ</span>
          <span>ジ</span>
          <span>ー</span>
          <span>マ</span>
          <span>ッ</span>
          <span>ク</span>
          <span>ス</span>
        </div>
        <div
          className="matrix-column matrix-tiffany text-3xl"
          style={{
            right: "55px",
            animationDuration: "7.5s",
            animationDelay: "3.5s",
          }}
        >
          <span>終</span>
          <span>了</span>
          <span>コ</span>
          <span>ー</span>
          <span>ド</span>
          <span>コ</span>
          <span>ア</span>
        </div>
        <div
          className="matrix-column matrix-purple text-sm"
          style={{
            right: "110px",
            animationDuration: "4.2s",
            animationDelay: "1.7s",
          }}
        >
          <span>サ</span>
          <span>イ</span>
          <span>バ</span>
          <span>ー</span>
          <span>パ</span>
          <span>ン</span>
          <span>ク</span>
          <span>世</span>
          <span>代</span>
        </div>
      </div>

      {/* Hintergrund */}
      <div className="glitch-bg absolute inset-0 w-full h-full pointer-events-none z-1">
        <img
          src="/cover.png"
          alt="Arcade Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#9400d3]/30 via-transparent to-[#05010c]/90" />
      </div>

      {/* Blitz-System */}
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
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
            </filter>
            <filter id="brush-edges">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8 0.1"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" />
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
      </div>

      {/* Header */}
      <header className="glitch-text-wrapper relative mt-2 text-center z-10 select-none">
        <h1 className="sf-arcade-title text-6xl md:text-8xl italic tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#00f3ff] to-[#9400d3] scale-x-200 scale-y-150 origin-center inline-block">
          HIT IS OP
        </h1>
        <p className="neon-blink-tiffany mt-4 text-sm font-dotgothic">
          Aura // Over 9K
        </p>
      </header>

      {/* Buttons - mb-20 sorgt dafür, dass sie im unteren Drittel bleiben */}
      {/* Buttons: Hier erzwingen wir die Position im unteren Drittel */}
      {/* Ändere bottom-24 zu bottom-32, bottom-40 oder bottom-48, bis die Höhe perfekt ist */}
      <main className="absolute bottom-48 z-10 flex flex-col items-center gap-4 w-full max-w-md">
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
        <ArcadeButton
          onClick={() => {
            if (isMuted) {
              audioRef.current.play().catch(console.log);
              setIsMuted(false);
            } else {
              audioRef.current.pause();
              setIsMuted(true);
            }
          }}
        >
          {isMuted ? "Sound: OFF" : "Sound: ON"}
        </ArcadeButton>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pt-12 pb-4 flex flex-wrap justify-center gap-37 select-none">
        <a
          href="https://youtube.com/@deinkanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#7a00cc] text-[#a133ff] -skew-x-12 scale-50 hover:scale-100 hover:bg-[#a133ff] hover:text-[#05010c] transition-all"
        >
          <svg className="w-6 h-6 skew-x-12 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://tiktok.com/@deinkanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#00f3ff] text-[#00f3ff] -skew-x-12 scale-50 hover:scale-100 hover:bg-[#00f3ff] hover:text-[#05010c] transition-all"
        >
          <svg className="w-5 h-5 skew-x-12 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.23.86.99 2.07 1.67 3.4 1.91v3.7c-1.74-.08-3.41-.74-4.73-1.89-.13-.1-.23-.23-.39-.4v6.11c-.01 2.34-.96 4.57-2.65 6.19-2.2 2.1-5.46 2.76-8.31 1.65-2.85-1.1-4.81-3.89-4.94-6.97-.18-3.45 2.11-6.62 5.48-7.38.74-.17 1.51-.2 2.26-.1v3.66c-.53-.08-1.07-.05-1.59.08-1.57.4-2.67 1.89-2.59 3.5.07 1.48 1.14 2.76 2.61 2.99 1.48.24 2.94-.65 3.32-2.1.1-.38.13-.78.12-1.18V.02z" />
          </svg>
        </a>
        <a
          href="https://x.com/deinkanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#9400d3] text-[#9400d3] -skew-x-12 scale-50 hover:scale-100 hover:bg-[#9400d3] hover:text-[#05010c] transition-all"
        >
          <svg className="w-5 h-5 skew-x-12 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://api.whatsapp.com/send?text=HIT IS OP!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-[#25D366] text-[#25D366] -skew-x-12 scale-50 hover:scale-100 hover:bg-[#25D366] hover:text-[#05010c] transition-all"
        >
          <svg className="w-5 h-5 skew-x-12 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}
