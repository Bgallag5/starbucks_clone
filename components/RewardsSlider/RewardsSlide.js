import React from 'react';
import Image from 'next/image';

export default function RewardsSlide(props) {
    const {title, subtext, img, id} = props.item
    const activeIndex = props.activeIndex;
  return (
    <div className={`${activeIndex === id ? 'slide--active' : ""}  slide`}>
        <div className="slide__img">
            <Image  src={require(`../../assets/images/${img}`)} alt={"menu-item"} layout='fill' />
        </div>
        <div className="slide__text">
            <h2 className=''>{title}</h2>
            <p>{subtext}</p>
        </div>
    </div>
  )
}
