import React from 'react';
import Image from 'next/image';

export default function EarnStars() {
  return (
    <div className='earn'>
        <div className='earn__header'>
            <h1 className='text-header'>Cash or card, you earn Stars</h1>
            <p className='text-subtext'> No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        </div>
        <div className="earn__rewards earn__rewards--1">
            <div className="rewards__title">1 per dollar</div>
            <div className="rewards__box">
                <div className='rewards__box--img '>
                    <Image className='img-src' src={require('../../assets/images/icon1.png')} alt={"icon"}/>
                </div>
                <div className='rewards__box--content '>
                    <h2>Scan and pay seperately</h2>
                    <p>Use cash or credit/debit card at the register</p>
                </div>
            </div>
            <div className="rewards__box">
                <div className='rewards__box--img '>
                    <Image className='img-src' src={require('../../assets/images/icon2.webp')} alt={"icon"}/>
                </div>
                <div className='rewards__box--content '>
                    <h2>Save payment in the app</h2>
                    <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                </div>
            </div>
            <div className="stars-border"></div>
        </div>
        <div className="earn__rewards ">
            <div className="rewards__title">2 per dollar</div>
            <div className="rewards__box">
                <div className='rewards__box--img '>
                    <Image className='img-src' src={require('../../assets/images/icon3.webp')} alt={"icon"}/>
                </div>
                <div className='rewards__box--content '>
                    <h2>Preload</h2>
                    <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                </div>
            </div>
            <div className="rewards__box">
                <div className='rewards__box--img '>
                    <Image className='img-src' src={require('../../assets/images/icon4.webp')} alt={"icon"}/>
                </div>
                <div className='rewards__box--content '>
                    <h2>Register your gift card</h2>
                    <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
