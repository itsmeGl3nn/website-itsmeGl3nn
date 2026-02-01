import type { Route } from "./+types/home";
import { UnderConstruction } from "../welcome/under-construction";
import { UNDER_CONSTRUCTION } from "../root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: UNDER_CONSTRUCTION ? "Welcome - Under Construction" : "itsmeGl3nn" },
    { name: "description", content: UNDER_CONSTRUCTION ? "Coming soon..." : "Welcome to my website" },
  ];
}

export default function Home() {
  if (UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
          Welcome
        </h1>
        <p className="text-gray-400 text-lg">
          This is my personal website
        </p>
      </div>
    </div>
  );
}
