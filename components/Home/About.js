import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="business-area pt-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="business-content text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <span>Green Gallery Art</span>
                <h2>
                  정상의 삶을 영위하기 위한
                  <br />
                  최고의 품격
                </h2>
                <img src="/images/logo.svg" width={250} className="mt-30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
