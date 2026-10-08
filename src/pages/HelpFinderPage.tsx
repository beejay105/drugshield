export function HelpFinderPage() {
  return (
    <div className="space-y-6">
      <section className="section-shell p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Help finder</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Integrated access to trusted support and care</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          This page is designed to help users find counselling services, clinics, community initiatives, professional help, and recovery support resources nearby.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ['Clinics & care centres', 'Find verified services, local health providers, and support programs.'],
          ['Counselling support', 'Match users with mental health professionals and community support pathways.'],
          ['Community organizations', 'Surface trusted nonprofits and local social support networks.'],
          ['Emergency guidance', 'Provide clear pathways for crisis or urgent escalation.'],
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
