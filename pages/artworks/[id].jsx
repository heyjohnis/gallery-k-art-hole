/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import baseUrl from "./../../utils/baseUrl";
import Footer from "./../../components/Layouts/Footer";
import PageBanner from "./../../components/Common/PageBanner";
import ArtworkItem from "../../components/Artworks/ArtworkItem";
import ArtworkContent from "../../components/Artworks/ArtworkContent";

const ArtworkDetail = ({ user }) => {
  const router = useRouter();
  const [, setLoading] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    setLoading(true);

    const atwk_no = router.query.id;
    const url = `${baseUrl}/artwork/`;
    axios({ method: "post", url, data: { atwk_no } })
      .then(({ data }) => {
        console.log("data: ", data);
        setContent(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.query.id]);

  return (
    <>
      <PageBanner
        pageTitle="미술품 보기"
        homePageUrl="/"
        homePageText="Home"
        activePageText="미술품 보기"
      />

      <ArtworkItem content={content} user={user} />
      <ArtworkContent content={content} />

      <Footer />
    </>
  );
};

export default ArtworkDetail;
