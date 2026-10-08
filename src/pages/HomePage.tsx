import { ActionCard, PageSection } from '../types/app';

const highlightCards: ActionCard[] = [
  {
    title: 'Evidence-based guidance',
    description: 'Deliver trusted, plain-language support for prevention and early intervention.',
    badge: 'Education',
  },
  {
    title: 'Personalized assessment',
    description: 'Prepare structured screening flows and care pathways for individuals in need.',
    badge: 'Assessment',
  },
  {
    title: 'Local support access',
    description: 'Connect people to relevant services, professionals, and recovery resources.',
    badge: 'Support',
  },
];

const keySections: PageSection[] = [
  {
    title: 'Trust & safety',
    body: 'Every interaction should feel professional, respectful, and clearly designed to protect user wellbeing.',
  },
  {
    title: 'Mobile-first experience',
    body: 'The interface is built for smaller devices first, with responsive patterns that scale up for wider screens.',
  },
  {
    title: 'Extensible architecture',
    body: 'The current shell is intentionally modular so backend, database, and AI services can be introduced later without breaking the foundation.',
  },
];

export function HomePage() {
  return (
    <div className="space-y-6">
      <section className="section-shell p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              DrugShield foundation
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Safer choices begin with trusted support.
            </h2>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              DrugShield is being built to support early intervention, preventive education, assessment, and access to professional help for communities in Nigeria.
            </p>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
                Explore the platform
              </button>
              <button type="button" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50">
                Learn more
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-cyan-50 p-6 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Program readiness</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">Stage 1</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-xl">🛡️</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Current focus</p>
                <p className="mt-2 text-base font-semibold text-slate-800">Responsive shell, content structure, and platform foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlightCards.map((card) => (
          <article key={card.title} className="section-shell p-5">
            <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              {card.badge}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-shell p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Platform principles</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">A foundation for long-term impact</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {keySections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-lg font-semibold text-slate-900">{section.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
