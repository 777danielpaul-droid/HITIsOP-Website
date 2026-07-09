export default function ArcadeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        w-full
        /* HIER ANGEPASST: Auf Mobile etwas schmaler, ab 'sm' (Tablets) wieder deine 280px */
        max-w-[240px]
        sm:max-w-[280px]
        px-4
        sm:px-6
        py-3
        /* HIER ANGEPASST: Text-Größe responsive */
        text-base
        sm:text-lg
        font-black
        uppercase
        tracking-widest
        text-[#00f3ff]
        bg-transparent
        border-2
        border-[#9400d3]
        cursor-pointer
        transition-all
        duration-100
        ease-in-out
        select-none
        
        /* Schräger Basis-Schnitt */
        transform -skew-x-12
        
        /* Start-Schatten */
        box-shadow-[4px_4px_0px_#00f3ff]
        
        /* UNSER HOVER-GLITCH AUS DER CSS-DATEI */
        btn-hover-glitch
        
        /* Active / Klick-Effekt */
        active:translate-x-[4px]
        active:translate-y-[4px]
        active:shadow-none
      "
    >
      <span className="block transform skew-x-12 tracking-wider pointer-events-none">
        {children}
      </span>
    </button>
  );
}
