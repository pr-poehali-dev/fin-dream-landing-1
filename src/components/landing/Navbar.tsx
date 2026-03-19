const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">F</span>
          </div>
          <span className="text-white font-black text-xl tracking-tight">FinDream</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Возможности", "Тарифы", "Отзывы"].map((item) => (
            <a key={item} href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="px-5 py-2 bg-white text-purple-700 hover:bg-purple-50 font-bold text-sm rounded-xl transition-colors">
          Попробовать бесплатно
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
