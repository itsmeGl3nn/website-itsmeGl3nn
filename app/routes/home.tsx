import type { Route } from "./+types/home";
import { UnderConstruction } from "../welcome/under-construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome - Under Construction" },
    { name: "description", content: "Coming soon..." },
  ];
}

export default function Home() {
  return <UnderConstruction />;
}
