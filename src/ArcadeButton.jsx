export default function ArcadeButton({ text, link, jpChar }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center border-2 border-[#00f3ff] bg-[#05010c]/70 backdrop-blur-md p-4 font-dotgothic text-xl text-white shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-200 hover:scale-105 hover:bg-[#ff007f]/30 hover:border-[#ff007f] hover:shadow-[0_0_25px_rgba(255,0,127,0.8)]"
      style={{ textDecoration: "none" }}
    >
      <span className="mr-4 font-bold text-[#ff007f] font-audiowide">
        {jpChar}
      </span>
      <span className="tracking-wider uppercase">{text}</span>
    </a>
  );
}
