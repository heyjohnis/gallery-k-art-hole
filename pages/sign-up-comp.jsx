import axios from "axios";
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useRouter } from "next/router";
import Footer from "../components/Signup/SignupFooter";
import SignupCompListWrap from "../components/Signup/SignupCompListWrap";
import { handleLogin } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
import styles from "./sign-up.module.scss";
import "swiper/scss/pagination";

const SERVICE_LIST = [
  {
    id: 1,
    title: "President K",
    group: "President K",
    discript: "결이 다른 행보로 격이 높은 인생을 살아 온 당신을 위해",
    img: "/images/vincent_van_gogh_sign_up_comp.jpg",
    serviceGroup: "01",
  },
  {
    id: 2,
    title: "Noblesse K",
    group: "Noblesse K",
    discript: "남다른 대한민국의 다이아 수저 0.1%",
    img: "/images/auguste_renoir_sign_up_comp.jpg",
    serviceGroup: "02",
  },
  {
    id: 3,
    title: "Elite K",
    group: "Elite K",
    discript: "알바트로스를 꿈꾸며 비상하는 독수리처럼",
    img: "/images/claude_monet_sign_up_comp.jpg",
    serviceGroup: "03",
  },
];

const INITIAL_USER = {
  login_id: "",
  password: "",
};

export default function SignUpComp() {
  const router = useRouter();

  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const [tabMenu, setTabMenu] = useState("first");

  const { goto } = router.query;

  useEffect(() => {
    setUser({
      login_id: window.localStorage.getItem("userId") || "",
      password: window.localStorage.getItem("password") || "",
    });
  }, [router.query]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      window.localStorage.setItem("userId", user.login_id);
      window.localStorage.setItem("password", user.password);
      handleLogin(response.data.token, goto);
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`${styles.signUpWrap}`}>
        <div className={`${styles.signUpPageLeftSection}`}></div>

        <div className={`${styles.signUpCompPageRightSection}`}>
          <div className={`${styles.pageWrap}`}>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
              <div className={`${styles.leftWrap}`}>
                <div className={`${styles.titleWrap}`}>
                  <h1>
                    Nice to meet you!
                    <br />
                    We will contact soon.
                  </h1>
                  {/* <p>
                        가입 승인 완료 후 서비스 이용이 가능합니다. <br />
                        그린갤러리의 멤버십을 확인하세요!
                      </p> */}
                  <p>
                    가입 승인 완료 후 로그인이 가능합니다. <br />
                    홈페이지를 먼저 방문해주세요!
                  </p>
                </div>
                {/* <div
                      className={`${styles.groupTabWrap}`}
                    >
                      <Nav className="flex-column">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="first"
                            onClick={handleTabMenu}
                            className={`${styles.navLink}`}
                          >
                            {SERVICE_LIST[0].title}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onClick={handleTabMenu}
                            className={`${styles.navLink}`}
                          >
                            {SERVICE_LIST[1].title}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onClick={handleTabMenu}
                            className={` ${styles.navLink}`}
                          >
                            {SERVICE_LIST[2].title}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div> */}
                {/* 회원가입 시 등급 선택 가능하게되면 적용 예정*/}
                <div style={{ width: "108px" }}>
                  <img src="../images/white_round_logo.png" alt="logo" />
                </div>
              </div>

              <div className={styles.tabContentsWrap}>
                <Tab.Content>
                  <Tab.Pane eventKey={`${tabMenu}`}>
                    <SignupCompListWrap
                      // LIST_ITEM = {
                      //   tabMenu === "first"
                      //     ? Object.entries(SERVICE_LIST[0])
                      //     : tabMenu === "second"
                      //     ? Object.entries(SERVICE_LIST[1])
                      //     : Object.entries(SERVICE_LIST[2])
                      // }
                      LIST_ITEM={
                        tabMenu === "first" || tabMenu === "second"
                          ? SERVICE_LIST
                          : SERVICE_LIST
                      }
                    />
                  </Tab.Pane>
                </Tab.Content>
                <Footer style={{ position: "relative", top: "20px" }} />
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
}
