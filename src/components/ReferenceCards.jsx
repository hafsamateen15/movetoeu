export default function ReferenceCards() {
  return (
    <section id="projects" className="px-8 py-16 bg-white border-t border-gray-100">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Reference projects</p>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Real migrations, real results</h2>
      <p className="text-gray-500 text-sm mb-10">
        Every project is submitted by the IT provider and reviewed by our team — so you see real proof, not marketing claims.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {[
          { sector: "Public sector", from: "Microsoft 365", to: "Nextcloud · LibreOffice" },
          { sector: "Healthcare", from: "US public cloud", to: "European sovereign cloud" },
          { sector: "Enterprise", from: "AWS / Azure", to: "STACKIT · IONOS" },
        ].map((p) => (
          <div key={p.sector} className="rounded-xl border border-dashed border-gray-200 p-5 bg-gray-50">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-500 mb-3 inline-block">
              {p.sector}
            </span>
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-4 mt-2"></div>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-xs bg-white border border-gray-200 text-gray-400 px-2 py-1 rounded">{p.from}</span>
              <span className="text-gray-300 text-xs">→</span>
              <span className="text-xs bg-green-50 text-green-400 border border-green-100 px-2 py-1 rounded">{p.to}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="flex items-center gap-1 text-xs text-gray-300">
              <span>✓</span>
              <span>Verified project</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
        <p className="text-sm font-medium text-blue-700 mb-1">
          Verified reference projects will appear here
        </p>
        <p className="text-sm text-blue-500 mb-4">
          Are you an IT provider with proven migration experience? List your company and submit your first project — it will be reviewed and published on this page.
        </p>
        <button className="text-sm px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
          List your company
        </button>
      </div>
    </section>
  );
}
