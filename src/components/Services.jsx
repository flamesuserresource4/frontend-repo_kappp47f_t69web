const services = [
  {
    title: 'Performance Marketing',
    desc: 'Paid social, search, lifecycle, and CRO—designed as one system to compound ROI.'
  },
  {
    title: 'Brand Development',
    desc: 'Positioning, messaging, and visual identity that make your value obvious.'
  },
  {
    title: 'Creative & Campaign Execution',
    desc: 'High-velocity creative sprints, content engines, and GTM launches.'
  },
  {
    title: 'Communications Strategy',
    desc: 'Narratives, PR angles, and thought leadership that build authority.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-700">Full-funnel strategy and execution tailored to your growth stage.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
