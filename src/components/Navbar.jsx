import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const sections = [
  { id: 'home', label: 'Home / Why Work With Me' },
  { id: 'services', label: 'Services' },
  { id: 'impact', label: 'Impact & Case Studies' },
  { id: 'about', label: 'About' },
  { id: 'thought', label: 'Thought Leadership & Speaking' },
  { id: 'contact', label: 'Contact / Book a Consultation' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-slate-900">Marketing by You</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {sections.map((s) => (
            <button key={s.id} onClick={() => handleNav(s.id)} className="hover:text-slate-900 transition-colors">
              {s.label}
            </button>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95">
          <div className="px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <button key={s.id} onClick={() => handleNav(s.id)} className="text-left py-2 text-slate-700 hover:text-slate-900">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
