export const metadata = {
  metadataBase: new URL("https://www.nevarasolutions.com"),
  title: "Nevara Solutions is Now Part of the MMT Group | MMT Consulting",
  description:
    "Nevara Solutions has joined the MMT Group, with MMT Consulting as its parent company. Explore MMT Consulting's BI, data engineering, and AI services alongside Nevara's digital execution capabilities.",
  alternates: {
    canonical: "/mmt-group",
  },
};

import MMTGroupHero from "./components/MMTGroupHero";
import GroupStructure from "./components/GroupStructure";
import MMTStats from "./components/MMTStats";
import MMTServices, { MMTServicesCTA } from "./components/MMTServices";
import GroupCTA from "./components/GroupCTA";

export default function MMTGroupPage() {
  return (
    <>
      <MMTGroupHero />
      <MMTStats />
      <GroupStructure />
      <MMTServices />
      <MMTServicesCTA />
      <GroupCTA />
    </>
  );
}
