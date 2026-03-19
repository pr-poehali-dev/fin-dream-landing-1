const features = [
  {
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    icon: "🤖",
    title: "Автокатегоризация",
    description:
      "Нейросеть автоматически определяет тип каждой операции. Чем больше вы работаете с FinDream, тем точнее он вас понимает.",
    badge: "ИИ",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    gradient: "from-teal-500 to-emerald-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    icon: "📊",
    title: "Умные отчёты",
    description:
      "Графики прибыли, структура расходов и прогнозы на следующий месяц — всё наглядно и понятно без бухгалтерского образования.",
    badge: "Premium",
    badgeColor: "bg-teal-100 text-teal-700",
  },
  {
    gradient: "from-orange-400 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    icon: "🔔",
    title: "Налоговые напоминания",
    description:
      "FinDream знает ваш режим налогообложения и напоминает о платежах заранее. Никаких штрафов, никаких сюрпризов.",
    badge: "Важно",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    icon: "💡",
    title: "Рекомендации по экономии",
    description:
      "Персональные советы на основе ваших трат: где можно срезать расходы и как увеличить чистую прибыль.",
    badge: "Premium",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    icon: "⚡",
    title: "Массовый ввод",
    description:
      "Загрузите выгрузку из банка за весь месяц одним файлом — FinDream обработает всё автоматически за секунды.",
    badge: "Быстро",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    icon: "🌐",
    title: "Работает в браузере",
    description:
      "Ничего устанавливать не нужно. Открыл браузер — уже работаешь. Доступно с любого устройства в любое время.",
    badge: "Удобно",
    badgeColor: "bg-violet-100 text-violet-700",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Возможности
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Всё, что нужно фрилансеру
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            FinDream берёт на себя рутину, чтобы вы занимались тем, что важно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative ${feature.bg} border ${feature.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {feature.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
