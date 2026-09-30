const PARTICLES = [
  { left: "4%", size: 3, duration: 24, delay: -2, opacity: 0.5 },
  { left: "11%", size: 2, duration: 30, delay: -14, opacity: 0.35 },
  { left: "18%", size: 4, duration: 21, delay: -8, opacity: 0.6 },
  { left: "25%", size: 2, duration: 34, delay: -22, opacity: 0.3 },
  { left: "31%", size: 3, duration: 26, delay: -5, opacity: 0.45 },
  { left: "38%", size: 2, duration: 32, delay: -18, opacity: 0.4 },
  { left: "44%", size: 4, duration: 23, delay: -11, opacity: 0.55 },
  { left: "50%", size: 2, duration: 36, delay: -27, opacity: 0.3 },
  { left: "56%", size: 3, duration: 25, delay: -3, opacity: 0.5 },
  { left: "62%", size: 2, duration: 31, delay: -16, opacity: 0.35 },
  { left: "68%", size: 4, duration: 22, delay: -9, opacity: 0.6 },
  { left: "73%", size: 2, duration: 35, delay: -24, opacity: 0.3 },
  { left: "79%", size: 3, duration: 27, delay: -6, opacity: 0.45 },
  { left: "84%", size: 2, duration: 33, delay: -19, opacity: 0.4 },
  { left: "89%", size: 4, duration: 20, delay: -12, opacity: 0.55 },
  { left: "94%", size: 2, duration: 29, delay: -1, opacity: 0.35 },
  { left: "8%", size: 2, duration: 38, delay: -30, opacity: 0.25 },
  { left: "47%", size: 3, duration: 28, delay: -20, opacity: 0.4 },
  { left: "65%", size: 2, duration: 40, delay: -35, opacity: 0.25 },
  { left: "86%", size: 3, duration: 26, delay: -15, opacity: 0.45 },
];

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-zinc-950 font-sans">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="blob-a absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-indigo-500/50 via-indigo-600/25 to-transparent opacity-70 mix-blend-screen" />
        <div className="blob-b absolute top-[30%] -right-40 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-violet-600/45 via-violet-500/20 to-transparent opacity-70 mix-blend-screen" />
        <div className="blob-c absolute -bottom-48 left-[18%] h-[38rem] w-[38rem] rounded-full bg-gradient-to-b from-cyan-400/35 via-cyan-500/15 to-transparent opacity-70 mix-blend-screen" />
        <div className="blob-d absolute top-[12%] left-[45%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-fuchsia-600/30 to-transparent opacity-60 mix-blend-screen" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.55) 100%)",
        }}
      />

      <div aria-hidden="true" className="absolute inset-0">
        {PARTICLES.map((p) => (
          <span
            key={p.left + p.duration}
            className="particle"
            style={
              {
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--particle-opacity": p.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <h1 className="relative bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-6xl font-semibold tracking-tight text-transparent sm:text-7xl">
        devtrop
      </h1>
      <p className="relative mt-6 text-sm font-medium tracking-[0.45em] text-zinc-400 uppercase sm:text-base">
        Coming Soon
      </p>
    </main>
  );
}
