const cases = [
  {
    stat: '3.2x',
    label: 'Paid social ROAS in 90 days',
  },
  {
    stat: '↑ 47%',
    label: 'Signup conversion after CRO sprint',
  },
  {
    stat: '$4.1M',
    label: 'Pipeline influenced by ABM program',
  },
  {
    stat: '12 weeks',
    label: 'From zero to brand + launch toolkit',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Impact & Case Studies</h2>
          <p className="mt-3 text-slate-700">Selected outcomes and transformation snapshots.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div key={c.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="text-3xl font-extrabold text-slate-900">{c.stat}</div>
              <div className="mt-2 text-sm text-slate-700">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
