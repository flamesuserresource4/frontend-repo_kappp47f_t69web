export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About</h2>
            <p className="mt-4 text-slate-700">I’m a marketing consultant focused on high-leverage growth systems. I’ve led performance, brand, and creative functions for startups and category leaders—bringing both speed and strategic rigor.</p>
            <p className="mt-3 text-slate-700">My approach blends data, positioning, and relentless execution. Whether you’re finding fit, scaling channels, or rebuilding narrative, I help you ship work that moves metrics and markets.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-slate-50 p-6">
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>• Fractional leadership across growth, brand, and comms</li>
              <li>• Senior advisor to founders, CMOs, and venture teams</li>
              <li>• Systems for rapid experimentation and compounding learnings</li>
              <li>• Operator-first mindset with hands-on execution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
