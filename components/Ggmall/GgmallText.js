/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Ggmall.module.scss";
import Link from "next/link";

const GgmallText = ({ content }) => {
  // const openTabSection = (evt, tabNmae) => {
  //   let i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabs_item");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }

  //   tablinks = document.getElementsByTagName("li");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace("current", "");
  //   }

  //   document.getElementById(tabNmae).style.display = "block";
  //   evt.currentTarget.className += "current";
  // };

  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className={styles.items_text}>
                <div className="tab quote-list-tab">
                  {/* Tabs */}
                  <ul className="tabs">
                    <li className="current">
                      <Link href="#tab1">
                        <span className={styles.tab_tit}>상세설명</span>
                      </Link>
                    </li>

                    <li>
                      <Link href="#tab2">
                        <span className={styles.tab_tit}>이용안내</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#tab3">
                        <span className={styles.tab_tit}>유의사항</span>
                      </Link>
                    </li>
                  </ul>

                  <div id="tab1" className={styles.contents}>
                    {content.info_contents ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.info_contents,
                        }}
                      ></div>
                    ) : (
                      "준비중입니다."
                    )}
                  </div>
                  <div id="tab2" className={styles.contents}>
                    {content.info_use ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.info_use,
                        }}
                      ></div>
                    ) : (
                      "준비중입니다."
                    )}
                  </div>
                  <div id="tab3" className={styles.contents}>
                    {content.info_notice ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.info_notice,
                        }}
                      ></div>
                    ) : (
                      "준비중입니다."
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            href={`/ggmall/list/${content.pd_kind}`}
            className="default-btn"
          >
            목록으로
          </Link>
        </div>
      </section>
    </>
  );
};

export default GgmallText;
