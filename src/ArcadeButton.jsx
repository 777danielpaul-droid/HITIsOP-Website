export default function ArcadeButton({ children, onClick, id }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="
        group
        relative
        w-full
        max-w-[240px]
        sm:max-w-[280px]
        px-4
        sm:px-6
        py-3
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
        
        transform -skew-x-12
        box-shadow-[4px_4px_0px_#00f3ff]
        btn-hover-glitch
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
