import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-900 bg-slate-950 px-6 py-4 text-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Render the unified branding component */}
        <Logo />

        {/* Action Targets */}
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-slate-400 transition-colors hover:text-white cursor-pointer">
            Sign In
          </button>
          <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}