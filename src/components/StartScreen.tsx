import { Sparkles, ArrowRight } from "@/lib/icons";

interface StartScreenProps {
  onStart: () => void;
  onLogin: () => void;
}

const StartScreen = ({ onStart, onLogin }: StartScreenProps) => {
  return (
    <div className="relative z-[1] mx-auto flex w-full max-w-lg flex-col items-stretch px-[24px] pt-[75px] pb-[160px] md:max-w-2xl md:px-[44px] md:pt-[69px]">
      <div className="mb-10 md:mb-14">
        <h1
          className="flex w-full flex-col items-start font-[900] lowercase leading-[0.94] tracking-[-1.8px] text-white text-left"
          style={{ fontSize: "clamp(34px, 11.5vw, 56px)" }}
        >
          <span className="block w-full text-left">welcome to</span>
          <span className="inline-flex items-center justify-start gap-[10px] whitespace-nowrap text-left">
            <span>facebox</span>
            <Sparkles size={28} strokeWidth={2.5} style={{ color: "#ffe603" }} aria-hidden="true" className="shrink-0" />
          </span>
        </h1>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="w-full h-14 md:h-16 flex items-center justify-center gap-2 transition-transform"
        style={{
          background: "#ffe603",
          color: "#000000",
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 900,
          textTransform: "lowercase",
          border: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        start
        <ArrowRight size={16} />
      </button>

      <button
        type="button"
        onClick={onLogin}
        className="w-full h-14 md:h-16 mt-3 flex items-center justify-center transition-transform"
        style={{
          background: "#000000",
          color: "#ffffff",
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 900,
          textTransform: "lowercase",
          border: "2px solid #ffe603",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        log in
      </button>
    </div>
  );
};

export default StartScreen;
