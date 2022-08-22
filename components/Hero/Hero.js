import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero__text">
            <h1 className="hero__text--header text-header">Free Coffee <br></br> Is A Tap Away</h1>
            <p className="hero__text--subheader text-subtext">Join now to start earing rewards</p>
            <button className="hero__text--btn text-subtext btn">Join now</button>
            <p className='hero__text--link text-subtext'>Or <a  href='https://www.starbucks.com/rewards/mobile-apps/'>join in the app</a>  for the best experience</p>
        </div>
        <div className="hero__stars">
            <div className='star'></div>
            <div className='star star-2'></div>
            <div className='star star-3'></div>
            <div className='star star-4'></div>
            <div className='star star-5'></div>
            <div className='star star-6'></div>
            <div className='star star-7'></div>
            <div className='star star-8'></div>
            <div className='star star-9'></div>
        </div>
    </div>
  )
}
