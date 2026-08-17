export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
      <div className="text-lg font-semibold text-blue-700">
        Move<span className="text-gray-900">ToEU</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm text-gray-500">
        <a href="#how-it-works" className="hover:text-gray-800">How it works</a>
        <a href="#projects" className="hover:text-gray-800">Reference projects</a>
        <a href="#providers" className="hover:text-gray-800">Providers</a>
      </div>
      <button className="text-sm px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
        List your company
      </button>
    </nav>
  );
}
