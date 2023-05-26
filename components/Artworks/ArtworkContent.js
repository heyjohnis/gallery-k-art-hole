/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Artwork.module.scss";
import { renderTextWithLineBreaks } from "../../utils/string.js";
import Link from "next/link";
import { stringToNumber } from "../../utils/number";

const ArtworkContent = ({ content }) => {
  console.log("content: ", content);
  const atstNo = stringToNumber(content.atst_cd);

  return (
    <>
      <section className="news-area ptb-10">
        <div className={`container ${styles.ArtworkContent}`}>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className={styles.items_text}>
                <div className="tab quote-list-tab">
                  {/* Tabs */}
                  <ul className="tabs">
                    <li className="current">
                      <Link href="#tab1">
                        <span className={styles.tab_tit}>작품소개</span>
                      </Link>
                    </li>

                    <li>
                      <Link href="#tab2">
                        <span className={styles.tab_tit}>작가소개</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#tab3">
                        <span className={styles.tab_tit}>큐레이터 노트</span>
                      </Link>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div id="tab1">
                      <h3>작품소개</h3>
                      <img
                        src={`https://www.artnomics.co.kr/data/artworks/${content.atwk_no}/image.jpg`}
                        alt={content.atwk_nm}
                      />
                    </div>
                    <div id="tab2">
                      <h3>작가소개</h3>
                      <h5 className={styles.shrt_intro}>
                        {content.shrt_intro}
                      </h5>
                      <div className="row">
                        <div className="col-lg-5 col-md-12 mb-5">
                          <img
                            src={`https://www.artnomics.co.kr/data/artist/${atstNo}/pf.jpg`}
                          />
                        </div>
                        <div className="col-lg-7 col-md-12">
                          <p
                            className={styles.introArtist}
                            dangerouslySetInnerHTML={{ __html: content.career }}
                          ></p>
                        </div>
                      </div>
                    </div>
                    <div id="tab3">
                      <h3>큐레이터 노트</h3>
                      <p className={styles.qnote}>
                        {renderTextWithLineBreaks(content.qnote)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtworkContent;
