export function AISupportPage() {
  return (
    <div className="space-y-6">
      <section className="section-shell p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">AI support</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Guided support without replacing professional care</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          This section is reserved for future AI-assisted onboarding, coping suggestions, educational prompts, and triage assistance built with strong safety constraints and human oversight.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Safety-first guidance', 'Provide supportive information while reinforcing professional care when needed.'],
          ['Relevant next steps', 'Recommend evidence-based educational resources and actions.'],
          ['Human escalation', 'Flag high-risk situations and direct users to trusted care options.'],
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
