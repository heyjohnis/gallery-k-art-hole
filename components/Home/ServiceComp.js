import React, { useEffect } from "react";
import { Section } from "react-fullpage";
import styles from "./home.module.scss";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import MainListWrap from "./MainListWrap";
import { POST } from "../../hooks/restApi";
import Link from "next/link";
import ta from "date-fns/locale/ta/index";

export default function ServiceComp() {
  const [tourRecommoed, setTourRecommend] = React.useState([]);
  const [shopRecommend, setShopRecommend] = React.useState([]);
  const [serviceRecommend, setServiceRecommend] = React.useState([]);

  const getRandService = (pd_kind) => {
    POST("/mall/rand", { pd_kind, limit_cnt: 3 }).then((res) => {
      console.log(res.data);
      const items = res?.data.map((item) => {
        return { ...item, ...calcDiscount(item.origin_price, item.price) };
      });
      if (pd_kind === "tour") {
        setTourRecommend(items);
      } else if (pd_kind === "shop") {
        setShopRecommend(items);
      } else {
        setServiceRecommend(items);
      }
    });
  };

  const calcDiscount = (originPrice, price) => {
    const discountPrice = originPrice - price;
    const rate = Math.floor((discountPrice / originPrice) * 100);
    return { discount: discountPrice, discount_rate: rate };
  };

  const [tabMenu, setTabMenu] = React.useState("first");
  const handleTabMenu = (e) => {
    console.log(e.target.dataset.rrUiEventKey);
    if (e.target.dataset.rrUiEventKey === "first") {
      setTabMenu("first");
    } else if (e.target.dataset.rrUiEventKey === "second") {
      setTabMenu("second");
    } else {
      setTabMenu("third");
    }
  };

  useEffect(() => {
    getRandService("tour");
    getRandService("shop");
    getRandService("service");
  }, []);

  return (
    <div className={`${styles.backgroundDark}`}>
      <div
        className={`row col-lg-12 col-md-12 ${styles.onePage} ${styles.itemListPageSection}`}
      >
        <Tab.Container id="left-tabs" defaultActiveKey="first">
          <div className={`col-lg-3 col-md-12`}>
            <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
              <h1>
                BEST
                <br />
                GG ITEMS<span>.</span>
              </h1>
              <p>
                GG는 Green Gallery의 약자로 <br />
                GG Mall만의 프리미엄 서비스를 제공합니다.
              </p>
            </div>
            <div className={`col-lg-12 col-md-12 ${styles.itemIntoroduceWrap}`}>
              <Nav className={`${styles.menuTab}`}>
                <Nav.Item className={`${styles.itemTab}`}>
                  <Nav.Link
                    eventKey="first"
                    onClick={handleTabMenu}
                    className={`col-lg-12 col-md-12 ${styles.navLink}`}
                  >
                    제휴서비스
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={`${styles.itemTab}`}>
                  <Nav.Link
                    eventKey="second"
                    onClick={handleTabMenu}
                    className={`col-lg-12 col-md-12 ${styles.navLink}`}
                  >
                    GG쇼핑
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={`${styles.itemTab}`}>
                  <Nav.Link
                    eventKey="third"
                    onClick={handleTabMenu}
                    className={`col-lg-12 col-md-12 ${styles.navLink}`}
                  >
                    GG투어
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Link
                href={
                  tabMenu === "third"
                    ? "/ggmall/list/tour/"
                    : tabMenu === "second"
                    ? "/ggmall/list/shop/"
                    : "/ggmall/list/service/"
                }
                style={{ color: "#fff" }}
              >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className={`col-lg-9 col-md-12 ${styles.itemListWrap}`}>
            <Tab.Content>
              <Tab.Pane eventKey={`${tabMenu}`}>
                <MainListWrap
                  items={
                    tabMenu === "first"
                      ? serviceRecommend
                      : tabMenu === "second"
                      ? shopRecommend
                      : tourRecommoed
                  }
                />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}
