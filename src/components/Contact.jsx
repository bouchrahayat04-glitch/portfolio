import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-28 sm:py-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
              Contact
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Let's build something
            <br />
            <span className="text-white/40">
              worth securing.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/40 sm:text-lg">
            Interested in working together, discussing cybersecurity,
            or simply connecting? Feel free to reach out.
          </p>

        </div>

        {/* Contact Information */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bouchrahayat04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/[0.03]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-red-500/30 group-hover:bg-red-500/10">
              <Mail
                size={20}
                className="text-white/50 transition-colors group-hover:text-red-500"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Email
              </p>

              <p className="mt-1 truncate text-sm text-white/70 group-hover:text-white">
                bouchrahayat04@gmail.com
              </p>
            </div>

            <ArrowUpRight
              size={17}
              className="ml-auto shrink-0 text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bouchra-hayat-7b21a8315"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/[0.03]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-red-500/30 group-hover:bg-red-500/10">
              <FaLinkedinIn
                size={20}
                className="text-white/50 transition-colors group-hover:text-red-500"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-white/30">
                LinkedIn
              </p>

              <p className="mt-1 text-sm text-white/70 group-hover:text-white">
                Connect with me
              </p>
            </div>

            <ArrowUpRight
              size={17}
              className="ml-auto shrink-0 text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bouchrahayat04-glitch"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/[0.03]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-red-500/30 group-hover:bg-red-500/10">
              <FaGithub
                size={20}
                className="text-white/50 transition-colors group-hover:text-red-500"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-white/30">
                GitHub
              </p>

              <p className="mt-1 text-sm text-white/70 group-hover:text-white">
                View my repositories
              </p>
            </div>

            <ArrowUpRight
              size={17}
              className="ml-auto shrink-0 text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
            />
          </a>

          

        </div>

      </div>
    </section>
  );
}

export default Contact;