import React, { useEffect } from "react";
import styles from "./home.module.scss";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import MainListWrap from "./MainListWrap";
import { POST } from "../../utils/restApi";
import Link from "next/link";
import { calcDiscount } from "../../utils/price";

export default function ServiceComp({ user, serviceGroup }) {
  const [tourRecommoed, setTourRecommend] = React.useState([]);
  const [shopRecommend, setShopRecommend] = React.useState([]);
  const [serviceRecommend, setServiceRecommend] = React.useState([]);

  const getRandService = (pd_kind) => {
    POST("/mall/rand", {
      pd_kind,
      limit_cnt: 3,
      membership: user?.membership || "green",
      service_group: user?.service_group || "01",
    }).then((res) => {
      console.log(res?.data);
      const items = res?.data?.map((item) => {
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
          <div className={`col-lg-4 col-md-12 ${styles.menuWrap}`}>
            <div className={`col-lg-12 col-md-12 ${styles.titleWrap}`}>
              <h1>
                BEST
                <br />
                GG{" "}
                {user?.user_kind === "01" || serviceGroup === "01"
                  ? "TOUR"
                  : user?.user_kind === "02" || serviceGroup === "02"
                  ? "SERVICE"
                  : "ITEMS"}
                <span>.</span>
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
                    {user?.user_kind === "01" || serviceGroup === "01"
                      ? "GG투어"
                      : user?.user_kind === "02" || serviceGroup === "02"
                      ? "제휴서비스"
                      : "GG쇼핑"}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className={`${styles.itemTab}`}>
                  <Nav.Link
                    eventKey="second"
                    onClick={handleTabMenu}
                    className={`col-lg-12 col-md-12 ${styles.navLink}`}
                  >
                    {user?.user_kind === "01" || serviceGroup === "01"
                      ? "GG쇼핑"
                      : user?.user_kind === "02" || serviceGroup === "02"
                      ? "GG쇼핑"
                      : "제휴서비스"}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className={`${styles.itemTab}`}>
                  <Nav.Link
                    eventKey="third"
                    onClick={handleTabMenu}
                    className={`col-lg-12 col-md-12 ${styles.navLink}`}
                  >
                    {user?.user_kind === "01" || serviceGroup === "01"
                      ? "제휴서비스"
                      : user?.user_kind === "02" || serviceGroup === "02"
                      ? "GG투어"
                      : "GG투어"}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Link
                href={
                  tabMenu === "first"
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

          <div className={`col-lg-8 col-md-12 ${styles.itemListWrap}`}>
            <Tab.Content>
              <Tab.Pane eventKey={`${tabMenu}`}>
                <MainListWrap
                  items={
                    tabMenu === "first"
                      ? tourRecommoed
                      : tabMenu === "second"
                      ? shopRecommend
                      : serviceRecommend
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
