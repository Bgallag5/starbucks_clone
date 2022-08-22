import React from 'react';
import Image from 'next/image';

export default function Extras() {

    const showModal = () => {
        document.querySelector(".modal-background").classList.add('extras__modal--visible');
        document.querySelector('.extras__modal').removeAttribute("id")
    }

  return (
    <div className='extras'>
        <h1 className='text-header'>Endless Extras</h1>
        <p className='text-subtext extras-subtext'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
        <div className='extras__items'>
            <div className="extras__items--item">
                <div className='icon'>
                    <Image layout='fill' src={require('../../assets/images/rewards1.webp')} alt={"extra"} />
                </div>
                <h3 className='text-subheader'>Fun Freebies</h3>
                <p className='text-subtext'>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                <button onClick={() => showModal()} className='btn  extras--btn text-subtext'>Learn More</button>
            </div>
            <div className="extras__items--item">
                <div className='icon'>
                    <Image layout='fill' src={require('../../assets/images/rewards2.webp')} alt={"extra"} />
                </div>
                <h3 className='text-subheader'>Order & pay ahead</h3>
                <p className='text-subtext'>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                <button onClick={() => showModal()}  className='btn extras--btn text-subtext '>Learn More</button>
            </div>
            <div className="extras__items--item">
                <div className='icon'>
                    <Image layout='fill' src={require('../../assets/images/rewards3.webp')} alt={"extra"} />
                </div>
                <h3 className='text-subheader'>Get to free faster</h3>
                <p className='text-subtext'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                <button onClick={() => showModal()}  className='btn extras--btn text-subtext '>Learn More</button>
            </div>
        </div>
    </div>
  )
}
