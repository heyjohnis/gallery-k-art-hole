import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { MyArtwork } from "../../components/NewMypage/MyArtwork";
import MyContract from "../../components/NewMypage/MyContract";
import { UserInfo } from "../../components/NewMypage/UserInfo";
import MyPoint from "../../components/NewMypage/MyPoint";
import Order from "../../components/Mypage/Content/Order";
import Update from "../../components/Mypage/Content/Update";
import Reservation from "../../components/NewMypage/Reservation";
import MobileFooterNav from "../../components/Layouts/MobileFooterNav";

function Mypage({ user }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState("home");
  const gotoMypageService = (serivce) => {
    setSelectedService(serivce);
  };

  useEffect(() => {
    if (router.query) {
      setSelectedService(router.query.service || "home");
    }
  }, [router.query]);

  useEffect(() => {
    const handWindowSize = () => {
      const { innerWidth } = window;
      if (innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handWindowSize();
    window.addEventListener("resize", handWindowSize);
    return () => {
      window.removeEventListener("resize", handWindowSize);
    };
  }, []);

  useEffect(() => {
    console.log("user: ", user);
    if (!user) router.push("/login");
  }, []);

  return (
    <>
      <PageBanner
        pageTitle="My page"
        homePageUrl="/mypage/"
        homePageText="My page"
        activePageText="마이페이지"
      />
      <section className="container">
        <ul className="mypage_tab_menu">
          <li
            className={selectedService === "home" ? "active" : ""}
            onClick={() => gotoMypageService("home")}
          >
            HOME
          </li>
          <li
            className={selectedService === "reservation" ? "active" : ""}
            onClick={() => gotoMypageService("reservation")}
          >
            예약조회
          </li>
          <li
            className={selectedService === "order" ? "active" : ""}
            onClick={() => gotoMypageService("order")}
          >
            주문ㆍ배송조회
          </li>
          <li
            className={selectedService === "point" ? "active" : ""}
            onClick={() => gotoMypageService("point")}
          >
            포인트 이용내역
          </li>
          <li onClick={() => alert("준비중입니다.")}>1:1 상담</li>
        </ul>
        <div className="mypage_content">
          {(!isMobile || selectedService === "home") && (
            <div className="content_user_info">
              <UserInfo user={user} gotoMypageService={gotoMypageService} />
            </div>
          )}
          <div className="content_items">
            {selectedService === "home" && (
              <>
                <MyContract user={user} /> <MyArtwork user={user} />
              </>
            )}
            {selectedService === "reservation" && <Reservation user={user} />}
            {selectedService === "order" && <Order />}
            {selectedService === "point" && <MyPoint user={user} />}
            {selectedService === "userInfo" && <Update user={user} />}
          </div>
        </div>
      </section>
      <Footer />
      {isMobile && <MobileFooterNav service={selectedService} />}
    </>
  );
}

export default Mypage;
