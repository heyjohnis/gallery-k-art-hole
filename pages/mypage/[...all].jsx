/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../utils/baseUrl";
import PageBanner from "../../components/Common/PageBanner";
import MyPageMain from "../../components/Mypage/MyPageMain";

const MyPage = ({ user }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState({});
  const [menu, setMenu] = useState("");

  console.log("user 나의계약: ", user);

  useEffect(() => {
    setLoading(true);
    if (user) {
      const url = `${baseUrl}/myinfo`;
      const medq_token = cookie.get("medq_token");
      axios({
        method: "post",
        url: url,
        headers: { Authorization: `Bearer ${medq_token}` },
        data: {},
      })
        .then(({ data }) => {
          setUserInfo(data.my_info);
          if (!data.my_info.is_active) {
            Router.push("/").then(() => {
              alert("승인 대기중입니다.");
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // 홈화면에서 [BOOK NOW] 클릭시, 로그인이 안됐을 경우
      Router.push({
        pathname: "/login",
        query: { goto: "mypage/reservation/" },
      });
    }
  }, []);

  useEffect(() => {
    router.replace("/");

    setMenu(router.query.all[0]);
  }, []);

  return (
    <>
      <PageBanner
        pageTitle="마이페이지"
        homePageUrl="/"
        homePageText="Home"
        activePageText="마이페이지"
      />

      <MyPageMain user={userInfo} menu={menu} />
    </>
  );
};
export default MyPage;
