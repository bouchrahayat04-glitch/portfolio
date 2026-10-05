import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
      </div>

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Status */}
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
              </span>

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                Cybersecurity Engineering Student
              </span>
            </div>

            {/* Name */}
            <h1 className="max-w-4xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Bouchra
              <br />
              <span className="text-white/40">Hayat</span>
              <span className="text-red-500">.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              Building secure systems, automating security workflows, and
              exploring the intersection of cybersecurity and software
              engineering.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              {/* View My Work */}
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/20"
              >
                View My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Download CV */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Download size={17} />
                Download CV
              </a>

            </div>

            {/* Scroll indicator */}
            <a
              href="#about"
              className="mt-16 inline-flex items-center gap-3 text-sm text-white/30 transition-colors duration-200 hover:text-red-500"
            >
              <ArrowDown size={16} />
              Scroll to explore
            </a>

          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative hidden lg:block">

            {/* Photo container */}
            <div className="relative mx-auto flex aspect-square max-w-[500px] items-center justify-center">

              {/* Large outer circle */}
              <div className="absolute inset-4 rounded-full border border-white/10" />

              {/* Red circle */}
              <div className="absolute inset-16 rounded-full border border-red-500/20" />

              {/* Glow behind photo */}
              <div className="absolute inset-28 rounded-full bg-red-500/10 blur-3xl" />

              {/* Square profile picture */}
              <div className="relative z-10 h-80 w-80 overflow-hidden rounded-2xl border border-red-500/30 bg-[#0a0a0a] shadow-2xl shadow-red-500/20">

                <img
                  src="/photo.png"
                  alt="Bouchra Hayat"
                  className="h-full w-full object-cover"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              </div>

              {/* ================= DECORATIVE NODES ================= */}

              {/* Top left */}
              <div className="absolute left-16 top-20 h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />

              {/* Top right */}
              <div className="absolute right-20 top-32 h-1.5 w-1.5 rounded-full bg-white/40" />

              {/* Bottom left */}
              <div className="absolute bottom-24 left-24 h-1.5 w-1.5 rounded-full bg-white/30" />

              {/* Bottom right */}
              <div className="absolute bottom-20 right-16 h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />

              {/* ================= TECHNICAL LABELS ================= */}

              {/* Security label */}
              <div className="absolute left-0 top-1/2 rounded-lg border border-white/10 bg-[#0a0a0a]/80 px-4 py-2 backdrop-blur-sm">
                <span className="font-mono text-xs text-white/40">
                  SECURITY
                </span>
              </div>

              {/* Systems label */}
              <div className="absolute right-0 top-1/2 rounded-lg border border-white/10 bg-[#0a0a0a]/80 px-4 py-2 backdrop-blur-sm">
                <span className="font-mono text-xs text-red-500">
                  SYSTEMS
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;