import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/5872b3e9-57c4-4d85-a2c4-f1f70c08789e/files/abd66c15-2acf-4346-99ce-304a7aa7d11b.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const problems = [
  { icon: "Shuffle", title: "Личное и рабочее в одной куче", desc: "Покупки для проекта перемешаны с походом в кафе. Вы не понимаете, сколько реально зарабатываете." },
  { icon: "TrendingDown", title: "Деньги уходят — неясно куда", desc: "Месяц закрыт, а баланс удивляет. Мелкие расходы незаметно съедают прибыль." },
  { icon: "Bell", title: "Налоги как снег на голову", desc: "Дедлайн налоговой приходит неожиданно. Штрафы и пени за просрочку — лишние расходы." },
  { icon: "Clock", title: "Часы на таблицы вместо работы", desc: "Excel, Google Sheets, стикеры... Учёт финансов отнимает время, которое стоит денег." },
];

const features = [
  { icon: "Zap", color: "#00e5a0", title: "ИИ-автокатегоризация", desc: "Нейросеть сама распределяет транзакции по категориям. Чем больше вы пользуетесь — тем точнее она становится." },
  { icon: "BarChart3", color: "#00c8f0", title: "Умные отчёты", desc: "Прибыль, расходы, динамика по месяцам — в красивых и понятных графиках. Всегда под рукой." },
  { icon: "Bell", color: "#7c5cfc", title: "Налоговые напоминания", desc: "FinDream знает ваш налоговый режим и заблаговременно напоминает о платежах. Никаких штрафов." },
  { icon: "Lightbulb", color: "#ffb547", title: "Рекомендации по экономии", desc: "Персональные советы на основе ваших трат. Узнайте, где можно сохранить от 5 до 30% бюджета." },
  { icon: "Upload", color: "#00e5a0", title: "Массовый импорт", desc: "Загружайте выписки из банка в один клик. Сотни операций за секунды без ручного ввода." },
  { icon: "Globe", color: "#00c8f0", title: "Работает в браузере", desc: "Не нужно ничего устанавливать. Открывайте с любого устройства — телефона, планшета, ноутбука." },
];

const steps = [
  { num: "01", title: "Добавьте операции", desc: "Вручную или загрузите выписку из банка — FinDream поймёт всё автоматически." },
  { num: "02", title: "ИИ категоризирует", desc: "Нейросеть предлагает категории. Поправьте пару раз — и система запомнит ваш стиль навсегда." },
  { num: "03", title: "Получайте отчёты", desc: "Смотрите прибыль, расходы и прогнозы. Принимайте решения на основе реальных данных." },
];

const reviews = [
  {
    name: "Алексей Романов",
    role: "Дизайнер-фрилансер, 4 года",
    text: "Раньше я каждый квартал паниковал из-за налогов. Теперь FinDream напоминает за 2 недели, и у меня всегда есть нужная сумма. Автокатегоризация — огонь, экономлю минимум 2 часа в неделю.",
    rating: 5,
  },
  {
    name: "Мария Соколова",
    role: "SMM-специалист, самозанятая",
    text: "Честно, думала что ещё один скучный финансовый инструмент. Но интерфейс классный, всё интуитивно. За первый месяц выяснила, что трачу 18% дохода на сервисы, о которых вообще забыла. Отказалась от половины.",
    rating: 5,
  },
];

const plans = [
  {
    name: "Бесплатный",
    price: "0₽",
    period: "",
    highlight: false,
    features: [
      { text: "До 50 операций в месяц", ok: true },
      { text: "Ручной ввод операций", ok: true },
      { text: "Базовые категории", ok: true },
      { text: "Простые отчёты", ok: true },
      { text: "Автокатегоризация ИИ", ok: false },
      { text: "Умные прогнозы", ok: false },
      { text: "Безлимит операций", ok: false },
      { text: "Приоритетная поддержка", ok: false },
    ],
    cta: "Начать бесплатно",
  },
  {
    name: "Premium",
    price: "499₽",
    period: "/мес",
    highlight: true,
    badge: "Популярный",
    features: [
      { text: "Безлимит операций", ok: true },
      { text: "Ручной и массовый ввод", ok: true },
      { text: "Автокатегоризация ИИ", ok: true },
      { text: "Умные отчёты и прогнозы", ok: true },
      { text: "Налоговые напоминания", ok: true },
      { text: "Рекомендации по экономии", ok: true },
      { text: "Импорт банковских выписок", ok: true },
      { text: "Приоритетная поддержка", ok: true },
    ],
    cta: "Попробовать 14 дней бесплатно",
  },
];

function AnimSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen font-golos" style={{ background: "#080c14", color: "#e8f0fe" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: navScrolled ? "rgba(8,12,20,0.92)" : "transparent",
          backdropFilter: navScrolled ? "blur(16px)" : "none",
          borderBottom: navScrolled ? "1px solid rgba(0,229,160,0.1)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-oswald text-2xl font-bold tracking-wide" style={{ color: "#00e5a0" }}>
            Fin<span style={{ color: "#e8f0fe" }}>Dream</span>
          </span>
          <button
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: "#00e5a0", color: "#080c14" }}
          >
            Попробовать бесплатно
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Mesh gradient bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "#00e5a0" }} />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "#7c5cfc" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: "#00c8f0" }} />
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(0,229,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.3)", color: "#00e5a0", opacity: 0, animation: "fade-up 0.6s ease 0.1s forwards" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00e5a0" }} />
              Финансовый ИИ для фрилансеров
            </div>

            <h1
              className="font-oswald font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", opacity: 0, animation: "fade-up 0.7s ease 0.2s forwards" }}
            >
              Финансовый порядок —<br />
              <span style={{ color: "#00e5a0" }}>без таблиц</span> и стресса
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#8899aa", opacity: 0, animation: "fade-up 0.7s ease 0.35s forwards" }}
            >
              <strong style={{ color: "#e8f0fe" }}>FinDream</strong> автоматически категоризирует ваши расходы, напоминает о налогах и показывает, куда уходят деньги. Работает в браузере — ничего не нужно устанавливать.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ opacity: 0, animation: "fade-up 0.7s ease 0.45s forwards" }}
            >
              <button
                className="px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-105 animate-glow-pulse"
                style={{ background: "#00e5a0", color: "#080c14" }}
              >
                Попробовать бесплатно 14 дней
              </button>
              <button
                className="px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#e8f0fe" }}
              >
                Как это работает →
              </button>
            </div>

            <div
              className="flex gap-8 mt-10"
              style={{ opacity: 0, animation: "fade-up 0.7s ease 0.55s forwards" }}
            >
              {[["5 000+", "пользователей"], ["99%", "точность ИИ"], ["2 мин", "на старт"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-oswald text-2xl font-bold" style={{ color: "#00e5a0" }}>{val}</div>
                  <div className="text-xs" style={{ color: "#8899aa" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div
            className="relative animate-float"
            style={{ opacity: 0, animation: "fade-in 1s ease 0.5s forwards" }}
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 0 60px rgba(0,229,160,0.2), 0 30px 60px rgba(0,0,0,0.5)" }}>
              <img src={HERO_IMG} alt="FinDream dashboard" className="w-full object-cover rounded-3xl" style={{ maxHeight: "440px" }} />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(0,229,160,0.05) 0%, transparent 60%)" }} />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl flex items-center gap-3"
              style={{ background: "#131c2e", border: "1px solid rgba(0,229,160,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,229,160,0.15)" }}>
                <Icon name="TrendingUp" size={20} style={{ color: "#00e5a0" }} />
              </div>
              <div>
                <div className="text-xs font-bold" style={{ color: "#00e5a0" }}>+34% прибыли</div>
                <div className="text-xs" style={{ color: "#8899aa" }}>за первый квартал</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(124,92,252,0.04) 50%, transparent 100%)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.3)", color: "#7c5cfc" }}>
              Узнаёте себя?
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Финансовый хаос — <span style={{ color: "#7c5cfc" }}>норма фрилансера</span>
            </h2>
            <p style={{ color: "#8899aa" }} className="text-lg max-w-xl mx-auto">
              Большинство самозанятых теряют от 15 до 40% дохода из-за неорганизованного учёта
            </p>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <AnimSection key={p.title} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl flex gap-5 items-start transition-all duration-300 hover:scale-[1.02] cursor-default"
                  style={{ background: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(124,92,252,0.15)" }}>
                    <Icon name={p.icon} size={22} style={{ color: "#7c5cfc" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: "#e8f0fe" }}>{p.title}</h3>
                    <p style={{ color: "#8899aa" }} className="text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24" style={{ background: "#0f1623" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.3)", color: "#00e5a0" }}>
              Как работает FinDream
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Три шага до <span style={{ color: "#00e5a0" }}>финансовой ясности</span>
            </h2>
          </AnimSection>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <AnimSection key={s.num} delay={i * 0.15} className="relative">
                <div
                  className="p-8 rounded-3xl h-full transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: "#131c2e", border: "1px solid rgba(0,229,160,0.1)" }}
                >
                  <div className="font-oswald text-5xl font-bold mb-4 leading-none" style={{ color: "rgba(0,229,160,0.2)" }}>{s.num}</div>
                  <h3 className="font-oswald text-xl font-bold mb-3" style={{ color: "#e8f0fe" }}>{s.title}</h3>
                  <p style={{ color: "#8899aa" }} className="text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center" style={{ color: "#00e5a0", opacity: 0.4 }}>
                    <Icon name="ChevronRight" size={28} />
                  </div>
                )}
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(0,200,240,0.1)", border: "1px solid rgba(0,200,240,0.3)", color: "#00c8f0" }}>
              Возможности
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Всё, что нужно — <span style={{ color: "#00c8f0" }}>в одном месте</span>
            </h2>
            <p style={{ color: "#8899aa" }} className="text-lg max-w-xl mx-auto">
              FinDream делает тяжёлую работу за вас, чтобы вы могли сосредоточиться на главном
            </p>
          </AnimSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimSection key={f.title} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl h-full transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 cursor-default"
                  style={{ background: "#0f1623", border: `1px solid ${f.color}22` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${f.color}18` }}
                  >
                    <Icon name={f.icon} size={22} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-oswald text-lg font-bold mb-2" style={{ color: "#e8f0fe" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>{f.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24" style={{ background: "#0f1623" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.3)", color: "#00e5a0" }}>
              Тарифы
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Прозрачные цены, <span style={{ color: "#00e5a0" }}>без сюрпризов</span>
            </h2>
            <p style={{ color: "#8899aa" }} className="text-lg">
              Начните бесплатно, подключите Premium когда будете готовы
            </p>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((plan, i) => (
              <AnimSection key={plan.name} delay={i * 0.15}>
                <div
                  className="p-8 rounded-3xl h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: plan.highlight ? "linear-gradient(135deg, #131c2e 0%, #0d1a2a 100%)" : "#131c2e",
                    border: plan.highlight ? "1.5px solid rgba(0,229,160,0.4)" : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: plan.highlight ? "0 0 40px rgba(0,229,160,0.12), 0 20px 40px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg, #00e5a0, #00c8f0)" }} />
                  )}
                  {plan.badge && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(0,229,160,0.15)", color: "#00e5a0", border: "1px solid rgba(0,229,160,0.3)" }}>
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="font-oswald text-xl font-bold mb-2" style={{ color: plan.highlight ? "#00e5a0" : "#8899aa" }}>{plan.name}</div>
                    <div className="flex items-end gap-1">
                      <span className="font-oswald text-5xl font-bold" style={{ color: "#e8f0fe" }}>{plan.price}</span>
                      {plan.period && <span className="text-lg mb-2" style={{ color: "#8899aa" }}>{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3 text-sm">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: f.ok ? "rgba(0,229,160,0.15)" : "rgba(255,255,255,0.05)" }}
                        >
                          <Icon
                            name={f.ok ? "Check" : "X"}
                            size={12}
                            style={{ color: f.ok ? "#00e5a0" : "#445566" }}
                          />
                        </span>
                        <span style={{ color: f.ok ? "#e8f0fe" : "#445566" }}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-105"
                    style={
                      plan.highlight
                        ? { background: "#00e5a0", color: "#080c14" }
                        : { background: "rgba(255,255,255,0.07)", color: "#e8f0fe", border: "1px solid rgba(255,255,255,0.1)" }
                    }
                  >
                    {plan.cta}
                  </button>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.3)", color: "#7c5cfc" }}>
              Отзывы
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Фрилансеры уже <span style={{ color: "#7c5cfc" }}>говорят</span>
            </h2>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <AnimSection key={r.name} delay={i * 0.15}>
                <div
                  className="p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "#0f1623", border: "1px solid rgba(124,92,252,0.15)" }}
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} style={{ color: "#ffb547" }}>★</span>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#c8d8e8" }}>"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold font-oswald"
                      style={{ background: "rgba(124,92,252,0.2)", color: "#7c5cfc" }}
                    >
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#e8f0fe" }}>{r.name}</div>
                      <div className="text-xs" style={{ color: "#8899aa" }}>{r.role}</div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl" style={{ background: "#00e5a0" }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.3)", color: "#00e5a0" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00e5a0" }} />
              Начните прямо сейчас — бесплатно
            </div>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Возьмите финансы <span style={{ color: "#00e5a0" }}>под контроль</span> сегодня
            </h2>
            <p className="text-lg mb-10" style={{ color: "#8899aa" }}>
              14 дней Premium-доступа бесплатно. Без привязки карты. Просто зарегистрируйтесь и начните.
            </p>
            <button
              className="px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-200 hover:scale-105 animate-glow-pulse"
              style={{ background: "#00e5a0", color: "#080c14" }}
            >
              Попробовать бесплатно 14 дней
            </button>
            <p className="mt-4 text-sm" style={{ color: "#445566" }}>
              Более 5 000 фрилансеров уже навели порядок в деньгах с FinDream
            </p>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald text-xl font-bold" style={{ color: "#00e5a0" }}>
            Fin<span style={{ color: "#e8f0fe" }}>Dream</span>
          </span>
          <p className="text-sm" style={{ color: "#445566" }}>
            © 2026 FinDream. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: "#8899aa" }}>
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
