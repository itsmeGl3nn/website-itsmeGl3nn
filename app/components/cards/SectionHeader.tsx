export function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="md:col-span-4">
      <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
}
