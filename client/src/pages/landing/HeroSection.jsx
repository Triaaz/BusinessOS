export default function HeroSection() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 text-center animate-fade-in">
      {/* Visual Badge */}
      <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
        Core Engine Active
      </span>
      
      {/* Primary Value Proposition */}
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        The Operating System for Your Business
      </h1>
      
      {/* Subtext Context */}
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        Manage inventory, process invoices, track sales, and monitor client workflows—all from a unified, high-performance dashboard.
      </p>

      {/* Core Capabilities Architectural Grid */}
<div className="mt-24 border-t border-slate-900 pt-16">
  <p className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
    System Capabilities
  </p>
  <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-left">
    
    {/* Capability 1 */}
    <div className="rounded-xl border border-slate-900 bg-slate-950/50 p-6">
      <div className="text-emerald-400 font-mono text-xs mb-3">[01 // INVENTORY]</div>
      <h3 className="text-lg font-bold text-white">Real-Time Stock Engine</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
        Track stock movements, automate reorder thresholds, and eliminate manual counts across multiple warehouses.
      </p>
    </div>

    {/* Capability 2 */}
    <div className="rounded-xl border border-slate-900 bg-slate-950/50 p-6">
      <div className="text-emerald-400 font-mono text-xs mb-3">[02 // INVOICING]</div>
      <h3 className="text-lg font-bold text-white">Automated Ledger Bills</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
        Generate compliant client invoices, track collection pipelines, and capture incoming sales metrics instantly.
      </p>
    </div>

    {/* Capability 3 */}
    <div className="rounded-xl border border-slate-900 bg-slate-950/50 p-6">
      <div className="text-emerald-400 font-mono text-xs mb-3">[03 // WORKFLOWS]</div>
      <h3 className="text-lg font-bold text-white">Role-Based Operations</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
        Enforce absolute ownership boundaries, preventing cross-tenant data leaks with isolated transaction rules.
      </p>
    </div>

  </div>
</div>

      {/* Primary Action Target */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-xs transition-all hover:bg-emerald-400 cursor-pointer">
          Deploy Your Instance
        </button>
        <button className="text-base font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer">
          Read Technical Docs <span aria-hidden="true">→</span>
        </button>
      </div>
    </main>
  );
}