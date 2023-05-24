/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import { commaFormat } from "../../utils/number.js";

const ArtworkThumbnail = ({ artwork }) => {
  return (
    <div
      className="col-lg-3 col-sm-6"
      data-aos="fade-in"
      data-aos-duration="1200"
      data-aos-delay={100}
    >
      <div className="single-team active">
        <div className="team-single-img"></div>

        <div className="team-content">
          <h3>{artwork.atwk_nm}</h3>
          <p>
            <span className="price">{commaFormat(artwork.atwk_pric)}</span>원
          </p>
        </div>
        <Link className="default-btn" href={`/ggmall/${artwork.atwk_no}`}>
          구매하기
        </Link>
      </div>
    </div>
  );
};

export default ArtworkThumbnail;
