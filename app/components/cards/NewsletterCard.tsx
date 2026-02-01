export function NewsletterCard() {
  return (
    <div className="md:col-span-2">
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-6 border border-orange-300">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Shall I keep you in the loop?</h3>
        <p className="text-sm text-slate-800 mb-4">
          Content includes articles, early access to products, and ongoing learnings.
        </p>
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 rounded-xl bg-white/70 border border-orange-500 text-slate-900 placeholder-slate-600 focus:outline-none focus:border-orange-600 text-sm"
        />
      </div>
    </div>
  );
}
