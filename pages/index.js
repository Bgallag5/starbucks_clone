import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import GettingStarted from "../components/GettingStarted/GettingStarted";
import RewardsSlider from "../components/RewardsSlider/RewardsSlider";
import Extras from "../components/Extras/Extras";
import EarnStars from "../components/EarnStars/EarnStars";
import ExtrasModal from "../components/Modals/ExtrasModal";

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <GettingStarted />
      <RewardsSlider />
      <Extras />
      <EarnStars />
      <ExtrasModal />
    </div>
  )
}
