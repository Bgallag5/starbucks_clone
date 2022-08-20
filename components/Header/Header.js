import React, {useRef} from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/images/logo.webp'

export default function Header() {

    const navRef = useRef()

    //set navbar indicator on click
    const handleNavClick = (e) => {
        navRef.current.childNodes.forEach(el => {
            el.classList.remove("nav--active")
        })
        e.preventDefault();
        e.target.classList.add('nav--active')
    }

  return (
    <div className='header'>
        <a className='skip-to-content' href='#main-content'>Skip to main content</a>
        <div className='header__top'>
            <div className='header__top--nav'>
                <div className='header--logo'>
                    <Image className='logo-src' src={Logo} layout={'fill'} alt={"starbucks logo"} />
                </div>
                    <ul ref={navRef}>
                        <li onClick={(e) => handleNavClick(e)}>Menu</li>
                        <li className='nav--active' onClick={(e) => handleNavClick(e)}>Rewards</li>
                        <li onClick={(e) => handleNavClick(e)}>Gift Cards</li>
                    </ul>
            </div>
            <div className="header__top--login">
                <button className='btn btn-locate'><FontAwesomeIcon icon={faLocationDot} /> Find a store</button>
                <button className='btn btn-white'>Sign In</button>
                <button className='btn btn-black'>Join Now</button>
            </div>
        </div>
        <div className='header__bottom'>
            <p>STARBUCKS® REWARDS</p>
        </div>
    </div>
  )
}
