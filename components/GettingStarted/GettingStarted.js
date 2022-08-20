import React from 'react'

export default function GettingStarted() {
  return (
    <div id='main-content' className='start'>
        <h1 className='text-header'>Getting started is easy</h1>
        <p className='text-subtext'>Earn Stars and get rewarded in a few easy steps</p>
        <div className='start__steps'>
            <div className='start__steps--step step-1'>
                <span className="step-num">1</span>
                <h3>Create an account</h3>
                <p className='text-subtext'>To get started, <a href='https://www.starbucks.com/account/create'>join now</a>. You can also <a href='https://www.starbucks.com/account/create'>join in the app</a>  to get access to the full range of Starbucks® Rewards benefits.</p>
            </div>
            <div className='start__steps--step  step-2'>
                <span className="step-num">2</span>
                <h3>Order and pay how you’d like</h3>
                <p className='text-subtext'>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href='#waystopay'>Learn how</a> </p>
            </div>
            <div className='start__steps--step  step-3'>
                <span className="step-num">3</span>
                <h3>Earn Stars, get Rewards</h3>
                <p className='text-subtext'>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </div>
        </div>
    </div>
  )
}
