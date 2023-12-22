import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper";
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useRouter } from "next/router";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import { handleLogin } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
import styles from "./sign-up.module.scss";
import "swiper/scss/pagination";

const SERVICE_LIST = [
  {
    id: 1,
    group: "Vincent Van Gogh",
    discript:"결이 다른 행보로 격이 높은 인생을 살아 온 당신을 위해",
    img: "",
  },
  {
    id: 2,
    group: "Auguste Renoir",
    discript:"남다른 대한민국의 다이아 수저 0.1%",
    img: "",
  },
  {
    id: 3,
    group: "Claude Monet",
    discript:"알바트로스를 꿈꾸며 비상하는 독수리처럼",
    img: "",
  },
];

const INITIAL_USER = {
  login_id: "",
  password: "",
};

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const [tabMenu, setTabMenu] = useState("first");

  const { goto } = router.query;

  useEffect(() => {
    console.log("useEffect router.query");
    setUser({
      login_id: window.localStorage.getItem("userId") || "",
      password: window.localStorage.getItem("password") || "",
    })
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
      window.localStorage.setItem("userId", user.login_id)
      window.localStorage.setItem("password", user.password)
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

        <div className={`${styles.signUpPageLeftSection}`}>
          
        </div>

        <div className={`${styles.signUpCompPageRightSection}`}>
          
            <div className={`${styles.pageWrap}`}>
              <div className={`${styles.leftWrap}`}>

                    <Tab.Container id="left-tabs" defaultActiveKey="first">
                      <div className={``}>
                        <div className={`${styles.titleWrap}`}>
                          <h1>
                            Nice to meet you!
                            <br />
                            We will contact soon.
                          </h1>
                          <p>
                            가입 승인 완료 후 서비스 이용이 가능합니다. <br />
                            그린갤러리의 멤버십을 확인하세요!
                          </p>
                        </div>
                        <div
                          className={`${styles.groupTabWrap}`}
                        >
                          <Nav className="flex-column">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                onClick={handleTabMenu}
                                className={`${styles.navLink}`}
                              >
                                Vincent Van Gogh
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="second"
                                onClick={handleTabMenu}
                                className={`${styles.navLink}`}
                              >
                                Auguste Renoir
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="third"
                                onClick={handleTabMenu}
                                className={` ${styles.navLink}`}
                              >
                                Claude Monet
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </div>
                      <div className={`${styles.itemListWrap}`}>
                        <Tab.Content>
                          <Tab.Pane eventKey={`${tabMenu}`}>
                          
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>

              </div>

              <div className={`${styles.rightWrap}`}>
                <div className={`${styles.imageWrap}`}>
                  <img src="/images/vincent_van_gogh_sign_up_comp.jpg" alt="" />
                </div>
                <div className={`${styles.textWrap}`}>
                  <h2>
                    Vincent Van Gogh
                  </h2>
                  <div className={`${styles.mainLink}`}>
                    <p>
                      결이 다른 행보로 격이 높은 인생을 살아 온 당신을 위해
                    </p>
                    <Link href="/">
                      Go to Main
                    </Link>
                </div>
                </div>
                
              </div>

            </div>

            <div className={`${styles.footer}`}>
              <p>
                <span>CONTACT</span> <span>ㅣ</span> cs@galleryk.co.kr ㆍ 1588 - 1778 ㆍ 10am - 7pm
              </p>
            </div>
          </div>
        </div>

      {/* <Footer /> */}
    </>
  );
}
