import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav() {
  const mobileNavRef = useRef();
  const mobileContainerRef = useRef();
  const swipeLengthRef = useRef();

  const closeMobileNav = (e) => {
    e.preventDefault()
    // if (mobileNavRef.current.contains(e.target)) return
    mobileContainerRef.current.classList.remove("nav--container-active");
    mobileNavRef.current.classList.remove("mobile__nav-active");
  };

  //add touch event listeners
  useEffect(() => {
    //get width of mobile nav
    let modalWidth = mobileNavRef.current.offsetWidth;
    //capture touch start - position X
    mobileNavRef.current.addEventListener("touchstart", (e) => {
      swipeLengthRef.current = e.touches[0].clientX;
    });
    //capture difference between touchStart clientX and touchMove clientX
    mobileNavRef.current.addEventListener("touchmove", (e) => {
      let threshold = e.touches[0].clientX - swipeLengthRef.current;

      //if threshold is twice the width of nav - close nav
      if (threshold * 2 >= modalWidth) {
        closeMobileNav(e);
      }
    });
  }, []);

  return (
    <div onClick={(e) => closeMobileNav(e)} ref={mobileContainerRef} className="mobile__nav--container">
      <div ref={mobileNavRef} className="mobile__nav">
        <span onClick={(e) => closeMobileNav(e)} className="mobile__nav--close">
          X
        </span>
        <ul className="mobile__nav--navbar text-subtext">
          <li className="nav-item">Menu</li>
          <li className="nav-item">Rewards</li>
          <li className="nav-item">Gift Cards</li>
        </ul>
        <div className="mobile__nav--login ">
          <div className="login-btns text-subtext">
            <button className="btn btn-white">Sign In</button>
            <button className="btn btn-black">Join Now</button>
          </div>
          <span>
            <FontAwesomeIcon icon={faLocationDot} /> Find a store
          </span>
        </div>
      </div>
    </div>
  );
}
