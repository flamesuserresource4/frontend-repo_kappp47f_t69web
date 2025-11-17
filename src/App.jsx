import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import About from './components/About';
import ThoughtLeadership from './components/ThoughtLeadership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Impact />
        <About />
        <ThoughtLeadership />
        <Contact />
        <footer className="border-t border-black/5 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Marketing by You — All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-slate-900">Back to top</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
