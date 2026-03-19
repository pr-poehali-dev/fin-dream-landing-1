import Icon from "@/components/ui/icon";

const CtaSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-100 via-violet-100 to-teal-50 rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 border border-purple-200 rounded-full px-5 py-2 mb-8">
            <span className="text-purple-700 font-semibold text-sm">Начните прямо сейчас</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Наведите порядок<br />
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              в финансах сегодня
            </span>
          </h2>

          <p className="text-gray-500 text-xl mb-10 leading-relaxed">
            Попробуйте <span className="text-gray-900 font-semibold">FinDream</span> бесплатно 14 дней —
            без кредитной карты, без сложных настроек. Просто откройте браузер и начните.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-black text-xl rounded-2xl shadow-2xl shadow-purple-200 hover:shadow-purple-300 transition-all duration-300 hover:scale-105">
              Попробовать бесплатно 14 дней
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
            {[
              { icon: "Shield", text: "Ваши данные защищены" },
              { icon: "Zap", text: "Готово за 2 минуты" },
              { icon: "X", text: "Отмена в любой момент" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2">
                <Icon name={item.icon as any} size={16} className="text-purple-400" />
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
