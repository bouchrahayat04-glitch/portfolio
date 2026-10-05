import { ArrowUp} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo / Name */}
          <div>
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight text-white"
            >
              <span className="text-red-500">B.</span>
            </a>

            <p className="mt-2 text-xs text-white/30">
              Cybersecurity Engineering Student
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#about"
              className="text-xs text-white/40 transition-colors hover:text-red-500"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-xs text-white/40 transition-colors hover:text-red-500"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-xs text-white/40 transition-colors hover:text-red-500"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-xs text-white/40 transition-colors hover:text-red-500"
            >
              Projects
            </a>

            <a
              href="#certifications"
              className="text-xs text-white/40 transition-colors hover:text-red-500"
            >
              Certifications
            </a>

            <a
              href="#contact"
              className="text-xs text-white/40 transition-colors hover:text-red-500"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2">

            <a
              href="https://github.com/bouchrahayat04-glitch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/bouchra-hayat-7b21a8315"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaLinkedinIn size={16} />
            </a>

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-red-500/30 text-red-500 transition-all hover:bg-red-500 hover:text-white"
            >
              <ArrowUp size={16} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/5 py-6 text-xs text-white/20 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} Bouchra. All rights reserved.
          </p>

          <p>
            Built with <span className="text-red-500">React</span> &{" "}
            <span className="text-red-500">Tailwind CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;