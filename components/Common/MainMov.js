import React from "react";
import Link from "next/link";
import YouTube from 'react-youtube';


const MainMov = () => {
  const opts = {
    height: '315',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <section className="offer-area main-mov ptb-100 mt-50">
        <div className="container">
          <div className="section-title">
            <span>GREEN GALLERY MOV</span>
            <h2>그린갤러리 동영상</h2>
          </div>

          <div className="row justify-content-center video-wrap">
            <YouTube videoId="d7O8r0fLnLE" opts={opts}/>;
          </div>
          
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <img src="/images/shape/services-shape/1_1.png" alt="Image" />
          <img src="/images/shape/services-shape/2_1.png" alt="Image" />
          <img src="/images/shape/services-shape/3.png" alt="Image" />
          <img src="/images/shape/services-shape/4.png" alt="Image" />
          <img src="/images/shape/services-shape/5.png" alt="Image" />
          <img src="/images/shape/services-shape/6.png" alt="Image" />
        </div>
      </section>
      <div className="white-shape">
        <img src="/images/main/shape_bottom.png" alt="Image" />
      </div>
    </>
  );

};

export default MainMov;
