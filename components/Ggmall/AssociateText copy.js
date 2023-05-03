import Link from 'next/link';
import React from "react";
import styles from "./Ggmall.module.scss";

const AssociateText = () => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

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
                    <li
                      className="current"
                      onClick={(e) => openTabSection(e, "tab1")}
                    >
                      <span className={styles.tab_tit}>상세설명</span>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab2")}>
                      <span className={styles.tab_tit}>이용안내</span>
                    </li>
                    <li onClick={(e) => openTabSection(e, "tab3")}>
                      <span className={styles.tab_tit}>유의사항</span>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <p>준비중입니다.</p>
                    </div>
                    <div id="tab2" className="tabs_item">
                      <p>준비중입니다.</p>
                    </div>
                    <div id="tab3" className="tabs_item">
                      <p>준비중입니다.</p>
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

export default AssociateText;
