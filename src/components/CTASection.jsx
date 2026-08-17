export default function CTASection() {
  return (
    <section className="px-8 py-20 bg-blue-700 text-center">
      <h2 className="text-2xl font-semibold text-white mb-3">
        Ready to find your migration partner?
      </h2>
      <p className="text-blue-200 text-sm mb-8 max-w-md mx-auto">
        Join the platform connecting European companies with verified IT migration specialists.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button className="px-6 py-3 bg-white text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-50">
          Start the Migration Assistant
        </button>
        <button className="px-6 py-3 border border-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600">
          List your company
        </button>
      </div>
    </section>
  );
}
