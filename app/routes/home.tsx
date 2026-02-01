import type { Route } from "./+types/home";
import { UnderConstruction } from "../welcome/under-construction";
import { UNDER_CONSTRUCTION } from "../root";
import { Navbar } from "../components/navbar";
import { ProfileCard } from "../components/cards/ProfileCard";
import { MapCard } from "../components/cards/MapCard";
import { SpotifyCard } from "../components/cards/SpotifyCard";
import { OfflineCard } from "../components/cards/OfflineCard";
import { TwitterCard } from "../components/cards/TwitterCard";
import { HowItStartedCard } from "../components/cards/HowItStartedCard";
import { BusinessCardsCard } from "../components/cards/BusinessCardsCard";
import { NewsletterCard } from "../components/cards/NewsletterCard";


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
    <>
      <Navbar />
      
      {/* HOME SECTION */}
      <section id="all" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
            <ProfileCard />
            <MapCard />
            <SpotifyCard />
            <OfflineCard />
            <TwitterCard />
            <HowItStartedCard />
            <BusinessCardsCard />
            <NewsletterCard />
          </div>
        </div>
      </section>


    </>
  );
}