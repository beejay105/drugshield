export function ProfilePage() {
  return (
    <div className="space-y-6">
      <section className="section-shell p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Profile</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">Personal wellbeing and progress overview</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Users will eventually manage goals, saved plans, assessment history, and preferred support pathways through a secure and privacy-conscious profile experience.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Goals', 'Track recovery milestones, development goals, and daily habits.'],
          ['Saved resources', 'Keep education content and support recommendations organized.'],
          ['Progress', 'Review personal updates and support-plan checkpoints.'],
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
