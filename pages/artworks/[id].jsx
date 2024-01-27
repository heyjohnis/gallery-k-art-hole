/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import baseUrl from "./../../utils/baseUrl";
import Footer from "./../../components/Layouts/Footer";
import PageBanner from "./../../components/Common/PageBanner";
import ArtworkItem from "../../components/Artworks/ArtworkItem";
import ArtworkContent from "../../components/Artworks/ArtworkContent";
import { POST } from "../../utils/restApi";

const ArtworkDetail = ({ user }) => {
  const router = useRouter();
  const [, setLoading] = useState({});

  const [content, setContent] = useState("");

  useEffect(() => {
    console.log("id: ", router.query.id);
    if (router.query.id) {
      const atwk_no = router.query.id;
      POST("/artwork", { atwk_no })
        .then(({ data }) => {
          console.log("data: ", data);
          setContent(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router.query]);

  return (
    <>
      <PageBanner
        pageTitle="미술품"
        homePageUrl="/artworks/"
        homePageText="MEMBER PRIVILEGES"
        activePageText="미술품"
      />

      <ArtworkItem content={content} user={user} />
      <ArtworkContent content={content} />

      <Footer />
    </>
  );
};

export default ArtworkDetail;
