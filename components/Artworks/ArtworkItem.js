/* eslint-disable react/prop-types */
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Artwork.module.scss";
import baseUrl from "../../utils/baseUrl";
import { commaFormat, decimalPlaces } from "../../utils/number";
import axios from "axios";
import cookie from "js-cookie";
import ImageModal from "../ImageModal";

const ArtworkItem = ({ content, user }) => {
  const [options, setOptions] = useState([]);
  const modalRef = useRef(null);

  const buyArtwork = () => {
    const isConfirm = confirm("작품신청을 하시겠습니까?");
    if (!isConfirm) {
      return;
    }
    const url = `${baseUrl}/artwork/buy`;
    const medq_token = cookie.get("medq_token");
    const payload = {
      atwk_no: content.atwk_no,
      user_no: user.user_no,
    };
    console.log("payload: ", payload, user);
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: payload,
    })
      .then(({ data }) => {
        console.log("data: ", data);
        if (data.insertId > 0) {
          alert("작품신청이 완료되었습니다.");
        }
      })
      .finally(() => {});
  };

  useEffect(() => {
    console.log("content: ", content.option);
    if (content.option) {
      setOptions(content.option.split("|"));
      console.log("options: ", options);
    }
  }, [content]);

  return (
    <>
      <section className="news-area pt-100 mb-5">
        <div className={`container ${styles.ArtworkItem}`}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className={styles.artwork_image}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  modalRef.current.showModal();
                }}
              >
                <img
                  src={`https://www.artnomics.co.kr/data/artworks/${content.atwk_no}/thumb-image_500.jpg`}
                  alt={content.atwk_nm}
                />{" "}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={styles.product_details_desc}>
                <h2>{(content.atwk_nm || "").replace("(KK)", "")}</h2>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>작 &nbsp;가&nbsp; 명</span>
                  {content.atst_nm}
                </div>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>작품코드</span>
                  {content.atwk_no}
                </div>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>호 &nbsp; &nbsp; &nbsp; 수</span>
                  {content.atwk_size_no}호
                </div>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>제작년도</span>
                  {content.atwk_make_year}
                </div>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>호당가격</span>
                  {commaFormat(content.atwk_size_per_pric || 0)}
                </div>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>작품크기</span>
                  {`${decimalPlaces(
                    content.atwk_size_width || 0,
                    1
                  )} X ${decimalPlaces(content.atwk_size_depth || 0, 1)}`}
                </div>
                <div className={styles.info_wrap}>
                  <span className={styles.tit}>재 &nbsp; &nbsp; &nbsp; 료</span>
                  {content.atwk_resc}
                </div>
                <h2 className={styles.price}>
                  {commaFormat(content.atwk_pric || 0)}
                  <span>원</span>
                </h2>
                <div className={styles.btn_warp}>
                  <Link
                    href="#"
                    className={`default-btn ${styles.btn}`}
                    onClick={buyArtwork}
                  >
                    작품신청
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImageModal
        imageUrl={`https://www.artnomics.co.kr/data/artworks/${content.atwk_no}/image.jpg`}
        ref={modalRef}
      />
    </>
  );
};

export default ArtworkItem;
