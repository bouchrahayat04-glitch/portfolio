import { ArrowUpRight, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Phylax",
    category: "Vulnerability Operations Center",
    description:
      "A full-stack Vulnerability Operations Center platform that centralizes asset management, vulnerability scanning, risk monitoring, and remediation tracking through Nessus and GLPI integrations.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Flask",
      "MariaDB",
      "Nessus API",
      "GLPI API",
      "JWT",
    ],
    type: "Cybersecurity",
    featured: true,
    github:
      "https://github.com/bouchrahayat04-glitch/phylax-vulnerability-operations-platform",
  },

  {
    id: 2,
    number: "02",
    title: "Cheatrace",
    category: "AI & Digital Trust",
    description:
      "An AI-powered academic integrity platform designed to detect plagiarism and academic fraud through forensic analysis, OCR, specialized AI agents, and automated investigation workflows.",
    technologies: [
      "Python",
      "Flask",
      "CrewAI",
      "Google Gemini",
      "n8n",
      "OCR",
      "AI Agents",
      "PostgreSQL",
    ],
    type: "Artificial Intelligence",
    featured: true,
    github:
      "https://github.com/bouchrahayat04-glitch/cheatrace",
  },

  {
    id: 3,
    number: "03",
    title: "NFTShieldX",
    category: "Blockchain & Cybersecurity",
    description:
      "A secure blockchain-based NFT marketplace that combines Web3, smart contracts, decentralized storage, and AI-powered fraud detection to identify suspicious and duplicate NFT content.",
    technologies: [
      "React",
      "Node.js",
      "Ethereum",
      "Solidity",
      "Ethers.js",
      "Hardhat",
      "IPFS",
      "Pinata",
      "OpenCV",
      "FAISS",
    ],
    type: "Blockchain",
    featured: true,
    github:
      "https://github.com/bouchrahayat04-glitch/nftshieldx",
  },

  {
    id: 4,
    number: "04",
    title: "NIST CSF 2.0 Risk Assessment",
    category: "Risk Management & Cybersecurity",
    description:
      "A cybersecurity risk assessment applying the NIST Cybersecurity Framework 2.0 to a medical imaging center, covering asset identification, threat analysis, risk evaluation, risk treatment, and security planning.",
    technologies: [
      "NIST CSF 2.0",
      "Risk Assessment",
      "Cybersecurity",
      "Risk Management",
      "Asset Management",
      "Security Controls",
    ],
    type: "Cybersecurity",
    featured: false,
    report: "/reports/NIST CSF 2.0.pdf",
  },

  {
    id: 5,
    number: "05",
    title: "SOC & SIEM with ELK Stack",
    category: "Security Operations & SIEM",
    description:
      "A SOC project focused on designing and implementing an ELK-based SIEM architecture for centralized log collection, security monitoring, threat detection, alert analysis, and incident management.",
    technologies: [
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Sysmon",
      "Winlogbeat",
      "Filebeat",
      "ElastAlert",
      "TheHive",
    ],
    type: "Cybersecurity",
    featured: false,
    report: "/reports/SOC_report.pdf",
  },

  {
    id: 6,
    number: "06",
    title: "PasswordVaultApp",
    category: "Mobile Security",
    description:
      "A team-developed password management application designed to securely manage and organize user credentials through a dedicated Android application.",
    technologies: [
      "Java",
      "Android",
      "Gradle",
      "SQLite",
      "Biometrics",
      "Cryptography",
    ],
    type: "Cybersecurity",
    featured: false,
    github:
      "https://github.com/bouchrahayat04-glitch/password-vault-app",
  },
];

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-[#050505] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
              Projects
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Things I've
              <br />
              <span className="text-white/40">
                built and explored.
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-white/40 lg:ml-auto">
              A selection of cybersecurity, software engineering and
              security-focused projects developed through internships,
              university work and personal exploration.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:border-red-500/30"
            >
              {/* Red glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-red-500/10 blur-[100px] transition-opacity duration-500 group-hover:bg-red-500/20" />

              <div className="relative grid lg:grid-cols-[120px_1fr_280px]">

                {/* Number */}
                <div className="hidden border-r border-white/5 p-8 lg:block">
                  <span className="font-mono text-sm text-red-500">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-10">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-white/40 transition-colors group-hover:border-red-500/20"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-end border-t border-white/5 p-7 sm:p-10 lg:border-l lg:border-t-0">
                  <div className="flex flex-wrap gap-3">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition-all hover:border-white/30 hover:text-white"
                      >
                        <FaGithub size={17} />
                        GitHub
                      </a>
                    )}

                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition-all hover:border-red-500/30 hover:text-red-500"
                      >
                        <FileText size={16} />
                        Report
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button flex items-center gap-2 rounded-full bg-red-500 px-4 py-2.5 text-sm text-white transition-all hover:bg-red-600"
                      >
                        View
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                        />
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                More Projects
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Other things I've worked on
              </h3>
            </div>

            <span className="hidden font-mono text-xs text-white/20 sm:block">
              {String(otherProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group flex min-h-75 flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30"
              >

                {/* Number + GitHub Arrow */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-red-500">
                    {project.number}
                  </span>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ArrowUpRight
                        size={18}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                      />
                    </a>
                  ) : (
                    <ArrowUpRight
                      size={18}
                      className="text-white/20"
                    />
                  )}
                </div>

                <div className="mt-auto">

                  <p className="text-xs uppercase tracking-wider text-white/25">
                    {project.category}
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h4>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/35">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies
                      .slice(0, 3)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="text-xs text-white/25"
                        >
                          {technology}
                        </span>
                      ))}
                  </div>

                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/40 transition-colors hover:text-white"
                    >
                      <FaGithub size={14} />
                      View on GitHub
                    </a>
                  )}

                  {/* Report Button */}
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-red-500 transition-colors hover:text-red-400"
                    >
                      <FileText size={14} />
                      View Report
                    </a>
                  )}

                </div>
              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;