import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import RewardsSlide from "./RewardsSlide";

export default function RewardsSlider() {
  const [rewards, setRewards] = useState(rewardsSlides);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (e) => {
    //access tabs indicator (border bottom)
    let tabsIndicator = document.querySelector(".active--indicator");

    //access all tabs and tab that was clicked
    let tabs = Array.from(document.querySelectorAll(".tab"));
    let chosenTabIndex = e.target.closest(".tab");
    setActiveIndex(tabs.indexOf(chosenTabIndex));

    //style indicator to rest under clicked tab
    tabsIndicator.style.marginLeft = `${tabs.indexOf(chosenTabIndex) * 20}%`;
  };

  useEffect(() => {
    setRewards(rewardsSlides);
  }, []);

  return (
    <div className="rewards">
      <h1 className="text-header">Get your favorites for free</h1>
      <div onClick={(e) => handleTabClick(e)} className="rewards__tabs">
        <div className="active--indicator"></div>
        <span className="tab">
          <p>25</p>
          <FontAwesomeIcon icon={faStar} />{" "}
        </span>
        <span className="tab ">
          <p>50</p>
          <FontAwesomeIcon icon={faStar} />{" "}
        </span>
        <span className="tab">
          <p>150</p>
          <FontAwesomeIcon icon={faStar} />{" "}
        </span>
        <span className="tab">
          <p>200</p>
          <FontAwesomeIcon icon={faStar} />{" "}
        </span>
        <span className="tab">
          <p>400</p>
          <FontAwesomeIcon icon={faStar} />{" "}
        </span>
      </div>
      <div className="rewards__content">
        {rewards &&
          rewards.map((item, i) => {
            return (
              <RewardsSlide activeIndex={activeIndex} key={i} item={item} />
            );
          })}
      </div>
    </div>
  );
}

const rewardsSlides = [
  {
    id: 0,
    img: "drink1.webp",
    title: "Customize your drink",
    subtext:
      "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
  },
  {
    id: 1,
    img: "drink2.webp",
    title: "Brewed hot coffee, bakery item or hot tea",
    subtext:
      "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
  },
  {
    id: 2,
    img: "drink3.webp",
    title: "Handcrafted drink, hot breakfast or parfait",
    subtext:
      "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
  },
  {
    id: 3,
    img: "drink4.webp",
    title: "Salad, sandwich or protein box",
    subtext:
      "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
  },
  {
    id: 4,
    img: "drink5.webp",
    title: "Select merchandise or at-home coffee",
    subtext:
      "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
  },
];
