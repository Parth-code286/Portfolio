import React from "react";

interface ButtonProps {
  name: string;
  isBeam?: boolean;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({ name, isBeam, containerClass = '' }) => {
  return (
    <div className={`relative ${containerClass} ${isBeam ? 'beam-effect' : ''}`.trim()}>
      <button
        className="
          relative
          px-10 py-4
          text-lg font-semibold
          text-white
          backdrop-blur-md
          bg-black/40
          border border-white/10
          rounded-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.6)]
          transition-all duration-300 ease-out
          hover:bg-black/60
          hover:shadow-[0_6px_30px_rgba(0,0,0,0.8)]
          hover:-translate-y-1
          active:scale-95
          flex items-center justify-center gap-3
        "
      >
        {/* ✅ Pulsing green dot */}
        <span
          className="
            w-3 h-3 rounded-full bg-green-400
            shadow-[0_0_10px_rgba(34,197,94,0.8)]
            animate-pulse
          "
        ></span>

        {/* ✅ Button text */}
        <span
          className="
            relative z-10
            text-white/90
            drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]
          "
        >
          {name}
        </span>

        {/* ✅ Subtle inner reflection */}
        <div
          className="
            absolute inset-0 rounded-xl
            bg-gradient-to-b from-white/5 to-transparent
            opacity-40
            -z-10
          "
        ></div>
      </button>
    </div>
  );
};

export default Button;