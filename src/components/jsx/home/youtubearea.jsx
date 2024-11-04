import React, { useState } from "react";
import Youtubebanner from '../../images/youtubebanner.png'

function Youtubearea() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
 
  return (
    <> 
      <section className="youtube_area">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-10 mx-auto">
                      <div className="youtube_area_inner">
                        <img src={Youtubebanner} alt="" />
                        <button onClick={togglePopup}><i class="fa-brands fa-youtube"></i></button>
                      </div>
            </div>
        </div>
    </div>
   </section>
   {isOpen && (
        <div className="popupOverlayStyle">
          <div  className="popupContentStyle">
            <button className="closeButtonStyle" onClick={togglePopup}>X</button>
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/VESvxuoQFtQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>

   
  )
}

export default Youtubearea
