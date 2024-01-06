import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useRouter } from "next/router";
import SignupCompListWrap from "../components/Signup/SignupCompListWrapMobile";
import styles from "./sign-up-mobile.module.scss";

const SERVICE_LIST = [
  {
    id: 1,
    title: "Vincent Van Gogh",
    group: "Vincent Van Gogh",
    discript:"결이 다른 행보로 격이 높은 인생을 살아 온 당신을 위해",
    img: "/images/vincent_van_gogh_sign_up_comp.jpg",
  },
  {
    id: 2,
    title: "Auguste Renoir",
    group: "Auguste Renoir",
    discript:"남다른 대한민국의 다이아 수저 0.1%",
    img: "/images/auguste_renoir_sign_up_comp.jpg",
  },
  {
    id: 3,
    title: "Claude Monet",
    group: "Claude Monet",
    discript:"알바트로스를 꿈꾸며 비상하는 독수리처럼",
    img: "/images/claude_monet_sign_up_comp.jpg",
  },
];

const INITIAL_USER = {
  login_id: "",
  password: "",
};

const SignupMobileComplete = ({ showReservationModal }) => {
  const [keywords, setKeywords] = useState([]);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(false);
  };

  const [tabMenu, setTabMenu] = useState("first");

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

  const handleClose = () => {
    setShow(false);
  };


  return (
    <>
    <div className={styles.section}>

      <div className={styles.completeWrap}>
        <div className={styles.tabMenuWrap}>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
              <div>
                <div className={styles.titleWrap}>
                  <img src="/images/dark-logo.svg" alt="logo" />
                  <h1>
                    Nice to meet you!
                    <br />
                    We will contact soon.
                  </h1>
                  <p>
                    가입 승인 완료 후 서비스 이용이 가능합니다. <br />
                    그린갤러리의 멤버십을 확인하세요!
                  </p>
                  <div
                    className={styles.groupTabWrap}
                  >
                    <Nav className="flex-column">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          onClick={handleTabMenu}
                          className={styles.navLink}
                        >
                          {SERVICE_LIST[0].title}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          onClick={handleTabMenu}
                          className={styles.navLink}
                        >
                          {SERVICE_LIST[1].title}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          onClick={handleTabMenu}
                          className={styles.navLink}
                        >
                          {SERVICE_LIST[2].title}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>

            <Tab.Content>
              <Tab.Pane eventKey={`${tabMenu}`}>
                <SignupCompListWrap
                    LIST_ITEM = {
                      tabMenu === "first"
                        ? Object.entries(SERVICE_LIST[0])
                        : tabMenu === "second"
                        ? Object.entries(SERVICE_LIST[1])
                        : Object.entries(SERVICE_LIST[2])
                    }
                  />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>

    </div>
    </>
  );
};

export default SignupMobileComplete;