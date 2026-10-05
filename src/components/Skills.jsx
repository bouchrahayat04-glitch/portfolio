import {
  Shield,
  Code2,
  Network,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    description:
      "Security operations, vulnerability management, monitoring and defensive security.",
    skills: [
      "Vulnerability Management",
      "SOC",
      "SIEM",
      "Threat Detection",
      "Incident Response",
      "File Integrity Monitoring (FIM)",
      "Security Automation",
      "Ethical Hacking",
    ],
  },
  {
    id: "development",
    name: "Development",
    icon: Code2,
    description:
      "Building security tools, web applications and automation workflows.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Flask",
      "REST APIs",
      "Authentication & JWT",
      "CSS/HTML",
      
    ],
  },
  {
    id: "networking",
    name: "Networking",
    icon: Network,
    description:
      "Understanding network communication, traffic analysis and network security.",
    skills: [
      "Packet Analysis",
      "Network Troubleshooting",
      "Firewalls configuration",
    ],
  },
  {
    id: "systems",
    name: "Systems",
    icon: Server,
    description:
      "Working with operating systems, virtualization and infrastructure.",
    skills: [
      "Linux",
      "Windows",
      "Windows Server",
      "Active Directory",
      "VMware",
      "System Administration",
      "PowerShell",
      "Bash",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: Database,
    description:
      "Working with relational databases and integrating them into applications.",
    skills: [
      "SQL",
      "MariaDB",
      "MySQL",
      "Database Design",
      "SQLAlchemy",
      "Data Modeling",
    ],
  },
  {
    id: "tools",
    name: "Security Tools",
    icon: Wrench,
    description:
      "Hands-on experience with security, monitoring and infrastructure tools.",
    skills: [
      "Nessus",
      "Wazuh",
      "GLPI",
      "ELK Stack",
      "Metasploit",
      "Ansible",
      "Wireshark",
      "nmap",
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].id
  );

  const active = skillCategories.find(
    (category) => category.id === activeCategory
  );

  const ActiveIcon = active.icon;

  return (
    <section
      id="skills"
      className="relative border-t border-white/5 bg-[#050505] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
              Skills
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools are useful.
              <br />
              <span className="text-white/40">
                Understanding is essential.
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-white/40 lg:ml-auto">
              A combination of cybersecurity knowledge, software development,
              networking and systems engineering.
            </p>
          </div>
        </div>

        {/* Skills Interface */}
        <div className="grid overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-[280px_1fr]">

          {/* Categories */}
          <div className="border-b border-white/10 bg-[#080808] p-3 lg:border-b-0 lg:border-r">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon
                    size={19}
                    className={
                      isActive
                        ? "text-white"
                        : "text-white/40 group-hover:text-red-500"
                    }
                  />

                  <span className="text-sm font-medium">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skills Content */}
          <div className="bg-[#0a0a0a] p-7 sm:p-10">

            {/* Category Header */}
            <div className="flex items-start justify-between gap-6">

              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <ActiveIcon
                    size={22}
                    className="text-red-500"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {active.name}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                  {active.description}
                </p>
              </div>

              <span className="hidden font-mono text-xs text-white/20 sm:block">
                0{skillCategories.indexOf(active) + 1}
              </span>

            </div>

            {/* Skills */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              {active.skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/2 px-5 py-4 transition-all duration-200 hover:border-red-500/30 hover:bg-red-500/3"
                >
                  <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                    {skill}
                  </span>

                  <span className="font-mono text-xs text-white/20 transition-colors group-hover:text-red-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;