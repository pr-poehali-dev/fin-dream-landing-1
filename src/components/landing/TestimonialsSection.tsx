const testimonials = [
  {
    name: "Алексей Горшков",
    role: "Дизайнер интерфейсов, фриланс 4 года",
    avatar: "АГ",
    avatarGradient: "from-purple-500 to-violet-600",
    rating: 5,
    text: "Раньше тратил каждое воскресенье на то, чтобы разобраться, куда ушли деньги за неделю. С FinDream это просто исчезло как проблема. Загружаю выгрузку из банка, и за 30 секунд вижу полную картину. Налоговые напоминания — отдельный кайф, ни разу не опоздал с оплатой.",
    highlight: "Сэкономил 3+ часа каждую неделю",
  },
  {
    name: "Марина Кузнецова",
    role: "Копирайтер и SMM-специалист",
    avatar: "МК",
    avatarGradient: "from-teal-500 to-emerald-500",
    rating: 5,
    text: "Я долго боялась разбираться с финансами — казалось, что это сложно и скучно. FinDream всё изменил. Интерфейс такой простой, что разобралась за 10 минут. ИИ сам определяет категории, а когда я его поправляю — запоминает. Уже через месяц увидела, что трачу слишком много на подписки, и отменила лишние.",
    highlight: "Нашла и сэкономила 4 700 ₽/мес",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 opacity-10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-white/20">
            Отзывы
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Они уже навели порядок
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Реальные истории фрилансеров, которые перестали бояться своих финансов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{t.name}</div>
                  <div className="text-white/50 text-sm">{t.role}</div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>

              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-400/30 rounded-xl px-4 py-2">
                <span className="text-teal-400 text-sm font-semibold">{t.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
