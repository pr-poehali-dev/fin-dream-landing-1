const problems = [
  {
    emoji: "😵",
    title: "Финансовый хаос",
    description:
      "Деньги приходят и уходят, но куда — непонятно. Таблицы Excel устарели, а блокнот теряется.",
  },
  {
    emoji: "🔀",
    title: "Личное смешалось с рабочим",
    description:
      "Личные покупки перемешаны с рабочими расходами. В конце месяца считаешь всё вручную — и всё равно ошибаешься.",
  },
  {
    emoji: "😨",
    title: "Налоги — как гром среди ясного неба",
    description:
      "Срок оплаты налога — завтра, а ты узнал об этом сегодня. Штрафы и стресс вместо спокойной работы.",
  },
  {
    emoji: "⏳",
    title: "Часы на учёт вместо работы",
    description:
      "До 5 часов в неделю уходит на ручной учёт. Это время, которое можно потратить на клиентов и новые проекты.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Узнаёшь себя?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Когда финансы — это боль
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Большинство фрилансеров и самозанятых сталкиваются с одними и теми же проблемами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl mb-4">{problem.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-500 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-200">
            <span>FinDream решает всё это за вас</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
