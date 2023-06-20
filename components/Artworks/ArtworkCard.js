/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import { commaFormat } from "../../utils/number.js";
import styles from "./ArtworkCard.module.scss";

const ArtworkCard = ({ artwork }) => {
  return (
    <div
      className={`col-lg-3 col-sm-6 ${styles.artwork}`}
      data-aos="fade-in"
      data-aos-duration="1200"
      data-aos-delay={100}
    >
      <div className="single-team active">
        <div className="team-single-img">
          <img
            src={`https://www.artnomics.co.kr/data/artworks/${artwork.atwk_no}/thumb-image_286.jpg`}
            alt={artwork.atwk_nm}
          />
        </div>
        <div className="team-content">
          <h2>{artwork.atst_nm}</h2>
          <h3>{(artwork.atwk_nm || "").replace("(KK)", "")}</h3>
          <p>
            <span className="price">{commaFormat(artwork.atwk_pric)}</span>원
          </p>
        </div>
        <Link className="default-btn" href={`/artworks/${artwork.atwk_no}`}>
          작품보기
        </Link>
      </div>
    </div>
  );
};

export default ArtworkCard;
