import {
  ArrowUpRight,
  Shield,
  Terminal,
  Network,
  Cloud,
} from "lucide-react";

const focusAreas = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security monitoring, vulnerability management and threat detection.",
  },
  {
    icon: Terminal,
    title: "Security Engineering",
    description:
      "Building tools and automating security operations and workflows.",
  },
  {
    icon: Network,
    title: "Network & Systems",
    description:
      "Understanding and securing networks, systems and infrastructure.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Exploring cloud environments, infrastructure security and secure deployment practices.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-[#080808] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-red-500" />

          <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
            About Me
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Introduction */}
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              I build,{" "}
              <span className="text-white/40">secure</span>, and{" "}
              <span className="text-red-500">automate.</span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-white/50 sm:text-lg">
              <p>
                I'm a cybersecurity engineering student passionate about
                understanding how systems work, how they can be attacked, and
                most importantly, how they can be secured.
              </p>

              <p>
                My interests sit at the intersection of cybersecurity,
                software engineering, networking and automation. I enjoy
                turning security concepts into practical tools and
                environments.
              </p>

              <p>
                Through academic projects, internships and personal labs,
                I've worked with security monitoring, vulnerability
                management, network analysis, APIs and full-stack development.
              </p>
            </div>

            {/* More about me */}
            <a
              href="#experience"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-red-500"
            >
              Explore my experience

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">

            <div className="bg-[#0b0b0b] p-7">
              <p className="text-4xl font-semibold text-white">
                02<span className="text-red-500">+</span>
              </p>

              <p className="mt-2 text-sm text-white/40">
                Years of engineering studies
              </p>
            </div>

            <div className="bg-[#0b0b0b] p-7">
              <p className="text-4xl font-semibold text-white">
                05<span className="text-red-500">+</span>
              </p>

              <p className="mt-2 text-sm text-white/40">
                Cybersecurity projects
              </p>
            </div>

            <div className="bg-[#0b0b0b] p-7">
              <p className="text-4xl font-semibold text-white">
                15<span className="text-red-500">+</span>
              </p>

              <p className="mt-2 text-sm text-white/40">
                Security technologies
              </p>
            </div>

            <div className="bg-[#0b0b0b] p-7">
              <p className="text-4xl font-semibold text-white">
                ∞
              </p>

              <p className="mt-2 text-sm text-white/40">
                Things left to learn
              </p>
            </div>

          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-24">

          <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            Areas I'm focused on
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10">
                    <Icon
                      size={20}
                      className="text-white/60 transition-colors duration-300 group-hover:text-red-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-white">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {area.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;