import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    year: "2026",
    period: "June — August 2026",
    company: "HPS",
    role: "Cybersecurity Intern — Vulnerability Operations Center",
    location: "Casablanca, Morocco",
    description:
      "Worked on the design and implementation of a Vulnerability Operations Center focused on improving the vulnerability management lifecycle.",
    responsibilities: [
      "Automated vulnerability detection and processing",
      "Integrated Nessus with vulnerability management workflows",
      "Worked with GLPI for ticketing and remediation tracking",
      "Developed automation scripts using Python and APIs",
      "Implemented vulnerability verification workflows",
      "Worked on reporting and security monitoring",
    ],
    technologies: [
      "Nessus",
      "Python",
      "GLPI",
      "REST API",
      "MariaDB",
      "Power BI",
    ],
  },
  {
    year: "2025",
    period: "August 2025",
    company: "Maghreb Steel",
    role: "Cybersecurity Intern",
    location: "Morocco",
    description:
      "Worked on a Security Operations Center project focused on security monitoring, threat detection and incident investigation using Wazuh.",
    responsibilities: [
      "Implemented and configured security monitoring with Wazuh",
      "Collected and analyzed security events",
      "Investigated detected security incidents",
      "Analyzed alerts and identified suspicious activity",
      "Worked on security event monitoring and incident analysis",
    ],
    technologies: [
      "Wazuh",
      "SIEM",
      "Incident Investigation",
      "Security Monitoring",
    ],
  },

  {
    year: "2025",
    period: "June — July 2025",
    company: "N+ONE Datacenters",
    role: "Cybersecurity Intern",
    location: "Morocco",
    description:
      "Worked on cybersecurity and Security Operations Center activities in a data center environment, with a focus on security monitoring and log analysis.",
    responsibilities: [
      "Worked on security monitoring and event analysis",
      "Analyzed system and security logs",
      "Worked with SIEM technologies and log management",
      "Investigated security events and potential threats",
      "Participated in cybersecurity operations within a data center environment",
    ],
    technologies: [
      "SIEM",
      "ELK Stack",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "sysmonlog",
      "filebeat"
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/5 bg-[#080808] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
              Experience
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Learning through
            <br />
            <span className="text-white/40">real-world problems.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-1.75 top-2 hidden h-[calc(100%-8px)] w-px bg-white/10 md:block" />

          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${index}`}
              className="relative grid gap-10 md:grid-cols-[180px_1fr] md:gap-16"
            >

              {/* Timeline Year */}
              <div className="relative hidden md:block">

                <div className="sticky top-28">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-red-500 bg-[#080808]">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </span>

                    <span className="font-mono text-sm text-white/40">
                      {experience.year}
                    </span>
                  </div>
                </div>

              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 sm:p-10">

                {/* Header */}
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">

                  <div>
                    <p className="text-sm font-medium text-red-500">
                      {experience.company}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      {experience.role}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-white/30">

                    <div className="flex items-center gap-2">
                      <CalendarDays size={15} />
                      {experience.period}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      {experience.location}
                    </div>

                  </div>

                </div>

                {/* Description */}
                <p className="mt-8 max-w-3xl text-base leading-7 text-white/50">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-10">

                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    What I worked on
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {experience.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-xl border border-white/5 bg-white/2 px-4 py-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />

                        <span className="text-sm leading-6 text-white/50">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Technologies */}
                <div className="mt-10 border-t border-white/5 pt-7">

                  <div className="flex flex-wrap gap-2">

                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-white/40 transition-colors hover:border-red-500/30 hover:text-red-500"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Link */}
                <div className="mt-8 flex justify-end">

                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-red-500"
                  >
                    View related projects

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;