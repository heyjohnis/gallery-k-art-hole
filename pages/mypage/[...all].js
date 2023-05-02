import React, { useState, useEffect } from "react";
import Router, { useRouter } from 'next/router';

import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../utils/baseUrl";
import PageBanner from "../../components/Common/PageBanner";
import MyPageMain from "../../components/Mypage/MyPageMain";

const MyPage = () => {

  const router = useRouter();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState({});
  const [menu, setMenu] = useState('');

  useEffect(() => {

    setLoading(true);

    const url = `${baseUrl}/myinfo`;
    const medq_token = cookie.get("medq_token");
    axios({ method: "post", url: url, headers: { Authorization: `Bearer ${medq_token}` }, data: {} })
        .then(({ data }) => {
            console.log("data: ", data);
            setUser(data.my_info);
            if(!data.my_info.is_active) {
              Router.push('/').then( () => {
                alert('승인 대기중입니다.');
              });
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }, []
  );

  useEffect(() => {
    setMenu(router.query.all[0]);
    }, [router.query.all[0]]);

  return (
    <>
      <PageBanner
        pageTitle="마이페이지"
        homePageUrl="/"
        homePageText="Home"
        activePageText="마이페이지"
      />

      <MyPageMain user={user} menu={menu} />
    </>
  );
};
export default MyPage;
