import Icon from "@/components/ui/icon";

const freePlan = [
  "До 50 операций в месяц",
  "Ручные категории",
  "Базовый отчёт по доходам и расходам",
  "Напоминания о налогах",
  "Доступ с любого устройства",
];

const premiumPlan = [
  "Безлимитные операции",
  "Автокатегоризация на ИИ",
  "Умные отчёты и прогнозы",
  "Персональные рекомендации",
  "Массовый импорт из банка",
  "Приоритетная поддержка",
  "Экспорт данных в Excel/PDF",
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Тарифы
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Начните бесплатно
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Никаких скрытых платежей. Переходите на Premium, когда будете готовы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative border border-gray-200 rounded-3xl p-8 bg-white hover:border-gray-300 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-gray-900 mb-1">Бесплатный</h3>
              <p className="text-gray-400 text-sm">Для старта и знакомства с сервисом</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-black text-gray-900">0 ₽</span>
              <span className="text-gray-400 ml-2">/ навсегда</span>
            </div>
            <ul className="space-y-3 mb-8">
              {freePlan.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-gray-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-600 font-bold rounded-2xl transition-all duration-300">
              Начать бесплатно
            </button>
          </div>

          <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden shadow-2xl shadow-purple-900/30">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 opacity-20 blur-[60px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400 opacity-10 blur-[60px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">Premium</h3>
                  <p className="text-white/50 text-sm">Для активных фрилансеров</p>
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text text-sm font-bold border border-purple-400/30 px-3 py-1 rounded-full">
                  Популярный
                </span>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-black text-white">499 ₽</span>
                <span className="text-white/50 ml-2">/ месяц</span>
                <div className="mt-2 text-sm text-teal-400 font-medium">
                  14 дней бесплатно при первой подписке
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {premiumPlan.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-teal-400/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-teal-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/50">
                Попробовать Premium бесплатно
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
