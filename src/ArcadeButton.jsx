export default function ArcadeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        w-full
        max-w-[280px]
        px-6
        py-3
        text-lg
        font-black
        uppercase
        tracking-widest
        text-tiffany
        bg-transparent
        border-2
        border-[#00f3ff]
        cursor-pointer
        transition-all
        duration-100
        ease-in-out
        select-none
        
        /* Schräger Basis-Schnitt */
        transform -skew-x-12
        
        /* Start-Schatten (Lila) */
        box-shadow-[4px_4px_0px_#9400d3]
        
        /* UNSER NEUER HOVER-GLITCH AUS DER CSS-DATEI */
        btn-hover-glitch
        
        /* Active / Klick-Effekt */
        active:translate-x-[4px]
        active:translate-y-[4px]
        active:box-shadow-[0px_0px_0px_transparent]
      "
    >
      {/* Der Text wird im Button wieder gerade gerückt */}
      <span className="block transform skew-x-12 tracking-wider pointer-events-none">
        {children}
      </span>
    </button>
  );
}
