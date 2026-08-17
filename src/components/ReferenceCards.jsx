const projects = [
  {
    sector: "Public sector",
    sectorColor: "bg-blue-50 text-blue-700",
    org: "Schleswig-Holstein (State Government)",
    from: "Microsoft Exchange / Office",
    to: "Open-Xchange · Nextcloud · LibreOffice",
    meta: "30,000 employees · Saves €15M/year from 2026",
    provider: "Dataport AöR",
  },
  {
    sector: "Healthcare",
    sectorColor: "bg-teal-50 text-teal-700",
    org: "Sana Kliniken",
    from: "US public cloud",
    to: "STACKIT sovereign cloud",
    meta: "41,000 employees · 46 hospitals · GDPR compliant",
    provider: "STACKIT + Deloitte Germany",
  },
  {
    sector: "Pharma / Logistics",
    sectorColor: "bg-green-50 text-green-700",
    org: "Phoenix Pharma SE",
    from: "US cloud infrastructure",
    to: "STACKIT sovereign cloud",
    meta: "49,000 employees · 17 EU countries",
    provider: "SVA System Vertrieb Alexander",
  },
];

export default function ReferenceCards() {
  return (
    <section id="projects" className="px-8 py-16 bg-white border-t border-gray-100">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Reference projects</p>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Real migrations, real results</h2>
      <p className="text-gray-500 text-sm mb-10">Every project is submitted by the IT provider and reviewed by our team.</p>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div key={p.org} className="rounded-xl border border-gray-100 p-5 hover:border-gray-200 transition-colors">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.sectorColor} mb-3 inline-block`}>
              {p.sector}
            </span>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">{p.org}</h3>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{p.from}</span>
              <span className="text-gray-400 text-xs">→</span>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">{p.to}</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">{p.meta}</p>
            <div className="flex items-center gap-1 text-xs text-teal-600">
              <span>✓</span>
              <span>Verified · {p.provider}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
