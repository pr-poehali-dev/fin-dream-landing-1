const steps = [
  {
    number: "01",
    color: "from-purple-500 to-violet-600",
    title: "Добавьте операции",
    description:
      "Вручную или загрузите сразу весь список. FinDream принимает данные из любого источника — банковские выгрузки, CSV, ручной ввод.",
    icon: "➕",
  },
  {
    number: "02",
    color: "from-violet-500 to-indigo-600",
    title: "ИИ сортирует всё сам",
    description:
      "Нейросеть автоматически определяет категорию каждой операции. Вы можете поправить — и ИИ запомнит ваши предпочтения.",
    icon: "🤖",
  },
  {
    number: "03",
    color: "from-teal-500 to-emerald-600",
    title: "Получайте умные отчёты",
    description:
      "Видите реальную картину: прибыль, расходы по категориям, тренды. FinDream сам подскажет, где можно сэкономить.",
    icon: "📊",
  },
  {
    number: "04",
    color: "from-orange-400 to-amber-500",
    title: "Не забывайте о налогах",
    description:
      "Напоминания приходят заранее. Вы знаете сумму, дату и способ оплаты — никаких сюрпризов и штрафов.",
    icon: "🔔",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Как это работает
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Просто. Быстро. Умно.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            От хаоса к порядку — за несколько минут, без установок и настроек
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-purple-200 via-teal-200 to-orange-200" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center group">
                <div className={`relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center">
                    <span className="text-xs font-black text-gray-400">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
