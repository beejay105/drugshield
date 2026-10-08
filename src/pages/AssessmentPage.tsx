export function AssessmentPage() {
  return (
    <div className="space-y-6">
      <section className="section-shell p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Assessment</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Structured screening and early intervention</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          This area will eventually support risk screening, health questionnaires, progress tracking, clinician review workflows, and safe escalation pathways.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ['Initial intake', 'Collect baseline information in a respectful and privacy-aware way.'],
          ['Risk review', 'Identify patterns and urgency for triage or professional guidance.'],
          ['Care pathway', 'Recommend services, check-ins, and next-step actions.'],
          ['Follow-up tracking', 'Monitor progress and readiness for additional support.'],
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
