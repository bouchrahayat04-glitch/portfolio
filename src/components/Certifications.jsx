import { Award, ArrowUpRight, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "2026",
    credential: "",
    category: "Cybersecurity",
    verify: "https://www.credly.com/badges/75710c05-70de-415e-9cda-9de382c9eeca/public_url", // Replace with your Credly / NetAcad badge URL
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-white/5 bg-[#080808] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-red-500">
              Certification
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Knowledge
              <br />
              <span className="text-white/40">
                backed by credentials.
              </span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-white/40 lg:ml-auto">
              A cybersecurity certification that complements my academic
              background and hands-on experience in security.
            </p>

          </div>
        </div>

        {/* Certification */}
        <div className="space-y-3">

          {certifications.map((certification, index) => (
            <article
              key={certification.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:border-red-500/30"
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/10" />

              <div className="relative grid gap-6 p-6 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:p-7">

                {/* Number / Icon */}
                <div className="flex items-center gap-4 sm:block">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10">
                    <Award
                      size={21}
                      className="text-white/50 transition-colors duration-300 group-hover:text-red-500"
                    />
                  </div>

                  <span className="font-mono text-xs text-white/20 sm:mt-3 sm:block">
                    01
                  </span>

                </div>

                {/* Information */}
                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full border border-red-500/20 bg-red-500/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-red-500">
                      Cybersecurity
                    </span>

                    <span className="text-xs text-white/25">
                      2026
                    </span>

                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                    Cisco Ethical Hacker
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/35">
                    <span>
                      Cisco Networking Academy
                    </span>
                  </div>

                </div>

                {/* Verification */}
                <div>

                  <a
                    href={certification.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/50 transition-all duration-300 hover:border-red-500/30 hover:text-red-500"
                  >
                    <ExternalLink size={15} />

                    Verify

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center gap-3 text-xs text-white/20">

          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

          <span>
            Verification link available through Cisco Networking Academy or Credly.
          </span>

        </div>

      </div>
    </section>
  );
}

export default Certifications;