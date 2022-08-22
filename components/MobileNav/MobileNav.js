import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function MobileNav() {
  return (
    <div className="mobile__nav">
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
        <span><FontAwesomeIcon icon={faLocationDot} /> Find a store</span>
      </div>
    </div>
  );
}
