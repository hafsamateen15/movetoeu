export default function HeroSection() {
  return (
    <section className="text-center px-8 py-20 bg-white">
      <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-5">
        🇪🇺 Hosted in Germany · GDPR compliant
      </span>
      <h1 className="text-4xl font-semibold text-gray-900 max-w-xl mx-auto leading-tight mb-4">
        Find verified IT partners for your migration to European cloud
      </h1>
      <p className="text-gray-500 text-base max-w-md mx-auto mb-8 leading-relaxed">
        MoveToEU connects companies moving away from Microsoft, AWS, and Google
        with IT service providers who have proven, verified migration experience.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800">
          Find a migration partner
        </button>
        <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
          List your company
        </button>
      </div>
    </section>
  );
}
