const steps = [
  {
    num: "1",
    title: "Tell us your situation",
    desc: "Answer 5 quick questions — what you're migrating from, your company size, sector, and budget.",
  },
  {
    num: "2",
    title: "Browse matched providers",
    desc: "See providers who have done exactly this migration before — with real, verified case studies.",
  },
  {
    num: "3",
    title: "Make contact directly",
    desc: "Send a contact request directly to the provider — no middlemen, no brokerage fees.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-8 py-16 bg-gray-50 border-t border-gray-100">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">How it works</p>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Find the right partner in 3 steps</h2>
      <p className="text-gray-500 text-sm mb-10">No cold calls, no guesswork — just verified providers with real migration experience.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.num} className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 text-sm font-medium flex items-center justify-center mb-4">
              {step.num}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
