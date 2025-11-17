export default function ThoughtLeadership() {
  return (
    <section id="thought" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Thought Leadership & Speaking</h2>
          <p className="mt-3 text-slate-700">Talks, workshops, and essays on growth, brand strategy, and creative systems.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Designing Growth Systems', type: 'Keynote' },
            { title: 'From Positioning to Performance', type: 'Workshop' },
            { title: 'Creative Ops for High-Velocity Teams', type: 'Talk' },
          ].map((t) => (
            <div key={t.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="text-sm text-slate-600">{t.type}</div>
              <div className="mt-2 font-semibold text-slate-900">{t.title}</div>
              <a href="#contact" className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:underline">Invite to speak →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
