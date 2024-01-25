import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import MobileTourListWrap from "./MobileTourListWrap";
import { POST } from "../../hooks/restApi";

import styles from "./MobileMain.module.scss";
const LIST_ITEM_ABROAD = [
  {
    id: 1,
    img: "/images/mobile/main/gogh/japan.png",
    title: "3박 4일 타루마에 골프, 노보리베츠 온천투어",
    discript: "일본 북해도",
    discount: 0,
    point: 1600000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "/images/mobile/main/gogh/japan.png",
    title: "태국 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "태국 방콕",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "/images/mobile/main/gogh/japan.png",
    title: "베트남 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "베트남 달랏",
    discount: 10,
    point: 990000,
    discountPoint: 99000,
    link: "/login/",
  },
  {
    id: 4,
    img: "/images/mobile/main/gogh/japan.png",
    title: "알마티 2색 4박6일 골프 18홀 라운딩, 3회 그린피",
    discript: "카자흐스탄 알마티",
    discount: 10,
    point: 1650000,
    discountPoint: 165000,
    link: "/login/",
  },
];

const LIST_ITEM = [
  {
    id: 1,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주",
    discript: "제주 서귀포",
    discount: 0,
    point: 1600000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주1",
    discript: "제주",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주2",
    discript: "제주",
    discount: 10,
    point: 990000,
    discountPoint: 99000,
    link: "/login/",
  },
  {
    id: 4,
    img: "/images/mobile/main/gogh/japan.png",
    title: "제주3",
    discript: "제주",
    discount: 10,
    point: 1650000,
    discountPoint: 165000,
    link: "/login/",
  },
];

const LIST_ITEM_PREMIUM = [
  {
    id: 1,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 3박 4일 타루마에 골프, 노보리베츠 온천투어",
    discript: "일본 북해도",
    discount: 0,
    point: 1600000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 2,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 태국 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "태국 방콕",
    discount: 0,
    point: 880000,
    discountPoint: 0,
    link: "/login/",
  },
  {
    id: 3,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 베트남 3박5일 프리미엄 골프 18홀 라운딩, 3회 그린피",
    discript: "베트남 달랏",
    discount: 10,
    point: 990000,
    discountPoint: 99000,
    link: "/login/",
  },
  {
    id: 4,
    img: "/images/mobile/main/gogh/japan.png",
    title: "프리미엄 알마티 2색 4박6일 골프 18홀 라운딩, 3회 그린피",
    discript: "카자흐스탄 알마티",
    discount: 10,
    point: 1650000,
    discountPoint: 165000,
    link: "/login/",
  },
];
export default function MobileHomeItems({ user }) {
  const [tabMenu, setTabMenu] = useState("first");
  const [tourRecommoed, setTourRecommend] = React.useState([]);
  const [shopRecommend, setShopRecommend] = React.useState([]);
  const [serviceRecommend, setServiceRecommend] = React.useState([]);

  const getRandService = (pd_kind) => {
    POST("/mall/rand", {
      pd_kind,
      limit_cnt: 3,
      membership: user?.membership,
      service_group: user?.service_group || "01",
    }).then((res) => {
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
    <>
      <div className={styles.titleWrapMid}>
        <span className={styles.titleMid}>
          골프투어
          <br />
          어디로 갈까요?
        </span>
      </div>

      <div className={styles.tabMenuWrap}>
        <Tab.Container id="left-tabs" defaultActiveKey="first">
          <Nav className={styles.tabMenuUl}>
            <Nav.Item className={styles.tabMenuUlLi}>
              <Nav.Link eventKey="first" onClick={handleTabMenu}>
                제휴서비스
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.tabMenuUlLi}>
              <Nav.Link eventKey="second" onClick={handleTabMenu}>
                GG쇼핑
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.tabMenuUlLi}>
              <Nav.Link eventKey="third" onClick={handleTabMenu}>
                GG투어
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className={styles.slideSecWrap}>
            <div className={styles.slideWrap}>
              <Tab.Content>
                <Tab.Pane eventKey={tabMenu}>
                  <MobileTourListWrap
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
          </div>
        </Tab.Container>
      </div>
    </>
  );
}
