export function ProfileCard() {
  return (
    <div className="md:col-span-2 md:row-span-2">
      <div className="bg-slate-800 rounded-3xl p-8 h-full border border-slate-700">
        <div className="flex gap-4 mb-4">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex-shrink-0"></div>
          <div className="flex-1">
            <p className="text-sm text-gray-400">I'm</p>
            <h2 className="text-2xl font-bold text-white">Glenn</h2>
          </div>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
I’m a Software Engineer based in the Philippines with over 6 years of experience building and scaling modern web and mobile applications. I work with React, Vue, and TypeScript on the frontend, Node.js on the backend, and I’m currently deepening my expertise in Python and React Native. My focus is increasingly on AI-driven systems, including building intelligent features, integrating machine learning models, and designing scalable cloud-native architectures that support data- and AI-powered products. I’m passionate about applying AI to real-world problems while maintaining strong product design and engineering fundamentals.
        </p>
      </div>
    </div>
  );
}
