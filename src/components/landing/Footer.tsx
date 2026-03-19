const Footer = () => {
  return (
    <footer className="bg-[#0a0814] py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">F</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight">FinDream</span>
          </div>

          <p className="text-white/30 text-sm text-center">
            © 2024 FinDream. Финансовый учёт с искусственным интеллектом для самозанятых и фрилансеров.
          </p>

          <div className="flex items-center gap-6">
            {["Условия", "Конфиденциальность", "Поддержка"].map((link) => (
              <a key={link} href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
