import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-teal-400 opacity-15 blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-violet-500 opacity-10 blur-[100px]" />

        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-white/80 text-sm font-medium">ИИ-бухгалтер для фрилансеров</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Финансы под контролем —<br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-teal-400 bg-clip-text text-transparent">
            без бухгалтера и Excel
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          <span className="text-white font-semibold">FinDream</span> автоматически сортирует доходы и расходы, напомнит о налогах
          и покажет, где вы теряете деньги. Работает в браузере — ничего устанавливать не нужно.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-purple-700/60">
            Попробовать бесплатно 14 дней
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="px-8 py-4 border border-white/25 text-white/80 hover:text-white hover:border-white/50 font-semibold text-lg rounded-2xl backdrop-blur-sm transition-all duration-300">
            Смотреть демо
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
          <span className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-teal-400" />
            Без кредитной карты
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-teal-400" />
            14 дней бесплатно
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-teal-400" />
            Отмена в любой момент
          </span>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "2 мин", label: "настройка" },
            { value: "40%", label: "экономия времени" },
            { value: "0 ₽", label: "старт" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;
