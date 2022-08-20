import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import GettingStarted from "../components/GettingStarted/GettingStarted";
import RewardsSlider from "../components/RewardsSlider/RewardsSlider";
import Extras from "../components/Extras/Extras";
import EarnStars from "../components/EarnStars/EarnStars";
import ExtrasModal from "../components/Modals/ExtrasModal";
import Head from "next/head";

export default function Home() {
  return (
    <div className="app-container">
      {/* <Head>
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      </Head> */}
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
