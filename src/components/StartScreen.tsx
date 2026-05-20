import { ArrowRight } from "@/lib/icons";

interface StartScreenProps {
  onStart: () => void;
  onLogin: () => void;
}

const StartScreen = ({ onStart, onLogin }: StartScreenProps) => {
  const fontFamily = "-apple-system, 'SF Pro Display', 'SF Pro Rounded', system-ui, sans-serif";

  return (
    <div className="relative z-[1] flex min-h-[100dvh] w-full items-center justify-center px-[24px]">
      <div className="w-full max-w-lg flex flex-col items-stretch">
        <h1
          className="mb-10 flex w-full flex-col items-start font-[900] lowercase leading-[0.94] tracking-[-1.8px] text-white text-left"
          style={{ fontFamily, fontSize: "clamp(34px, 11.5vw, 56px)" }}
        >
          <span className="block w-full text-left">welcome to</span>
          <span className="block w-full text-left whitespace-nowrap">facebox ✨</span>
        </h1>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onStart}
            className="relative flex items-center justify-between transition-transform"
            style={{
              flex: "1 1 0%",
              minWidth: 0,
              backgroundColor: "#ffffff",
              padding: "20px 12px 20px 16px",
              borderRadius: 8,
              fontFamily,
              WebkitTapHighlightColor: "transparent",
              border: "none",
            }}
          >
            <span className="text-[15px] font-[900] lowercase leading-[1.0] text-black text-left">start</span>
            <ArrowRight size={22} strokeWidth={2.5} style={{ color: "#000000" }} />
          </button>

          <button
            type="button"
            onClick={onLogin}
            className="relative flex items-center justify-between transition-transform"
            style={{
              flex: "1 1 0%",
              minWidth: 0,
              padding: "20px 16px 20px 12px",
              borderRadius: 8,
              fontFamily,
              color: "#ffffff",
              backgroundColor: "#000000",
              border: "3px solid #ffe603",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span className="relative z-[1] text-[15px] font-[900] lowercase leading-[1.0] text-left" style={{ color: "#ffffff" }}>log in</span>
            <ArrowRight size={22} strokeWidth={2.5} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
