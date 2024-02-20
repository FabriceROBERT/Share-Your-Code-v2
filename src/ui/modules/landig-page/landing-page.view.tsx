import React from "react";
import HeroTopView from "./components/heroTop/hero-top.view";
import FeaturedView from "./components/featured/featured.view";

export default function LandingPageView() {
  return (
    <div>
      <HeroTopView />
      <FeaturedView />
    </div>
  );
}
