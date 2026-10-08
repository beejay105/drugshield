export function EducationPage() {
  return (
    <div className="space-y-6">
      <section className="section-shell p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Education</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Learning resources for prevention and wellbeing</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          This page will eventually host videos, articles, consent-aware educational resources, and recovery-focused content for users and professionals.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Preventive education', 'Clear, honest information about substance use, risk factors, and protective habits.'],
          ['Youth-focused guidance', 'Developmentally appropriate content that supports informed decision-making.'],
          ['Community awareness', 'Material designed to encourage safer choices and healthier routines.'],
        ].map(([title, description]) => (
          <article key={title} className="section-shell p-5">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
