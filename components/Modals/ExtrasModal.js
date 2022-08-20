import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ExtrasModal() {
  const [modalPage, setModalPage] = useState(1);
  const pageContainerRef = useRef();
  const modalContainerRef = useRef();
  const modalRef = useRef();

  //set modal page on click
  const handleNavClick = (e) => {
    e.target.dataset.direction === 'right' ? setModalPage(2) : setModalPage(1)
  }

  //translate page container based on modalPage (index)
  useEffect(() => {
    if (modalPage === 2){
        pageContainerRef.current.classList.add('page-2--active')
    }
    else if (modalPage === 1){
        pageContainerRef.current.classList.remove('page-2--active')
    }
  }, [modalPage]);

  //close modal 
  function closeModal (e){
    //if click was on the modal do nothing
    if (modalRef.current.contains(e?.target)) return
    //reset modal page to 1 for next open
    //remove "visible" className
    modalRef.current?.setAttribute("id", "modal-fade")
    // modalRef.current?.classList.add('animate__animated', 'animate__fadeOut')
    modalContainerRef.current?.classList.remove("extras__modal--visible");
    // setModalPage(1)
    delayHide()
  }

  //sleep function, reset modal after it fades
  const delayHide = () => {
    setTimeout(() => {
        setModalPage(1)
    }, 750)
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape"){
            closeModal()
        }
    })
  })

  return (
    <div onClick={(e) => closeModal(e)} ref={modalContainerRef} className="modal-background">
      <div ref={modalRef} id="modal-fade" className="extras__modal">
        <span onClick={() => closeModal()} className="modal--close">X</span>
        <div ref={pageContainerRef} className="page--container">
          <div className="extras__modal--page  page-1">
            <div className="modal-img ">
              <Image
                className="img-src "
                src={require("../../assets/images/modal1.webp")}
                layout="fill"
                alt={"bicycle"}
              />
            </div>
            <div className="modal-text">
              <h2>Tap, go.</h2>
              <p className="text-subtext">
                Select your menu items in the app along with your store
                location. Then tell the barista your name when you swing by the
                pickup area to grab your order.
              </p>
            </div>
          </div>

          <div className="extras__modal--page  page-2">
            <div className="modal-img">
              <Image
                className="img-src"
                src={require("../../assets/images/modal2.webp")}
                layout="fill"
                alt={"person"}
              />
            </div>
            <div className="modal-text">
              <h2>Just for you</h2>
              <p className="text-subtext">
              Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.
              </p>
            </div>
          </div>


        </div>
        <div className="extras__modal--nav ">
          <div className="navigation ">
            <button className="nav--button" onClick={(e) => handleNavClick(e)} data-direction={'left'}><FontAwesomeIcon className="nav--button--icon" icon={faAngleLeft} /></button>
            <button onClick={() => setModalPage(1)} className={`nav--dot ${modalPage === 1 ? "nav--dot--active" : ""}`}></button>
            <button onClick={() => setModalPage(2)}  className={`nav--dot ${modalPage === 2 ? "nav--dot--active" : ""}`}></button>
            <button className="nav--button"  onClick={(e) => handleNavClick(e)} data-direction={'right'}><FontAwesomeIcon className="nav--button--icon" icon={faAngleRight} /></button>
          <button onClick={() => closeModal()} data-page={modalPage} className="nav--ok">Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}
