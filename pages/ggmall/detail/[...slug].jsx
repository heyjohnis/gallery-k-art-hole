import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
import FooterMo from "./../../../components/Layouts/MobileFooter";
import FooterNav from "./../../../components/Layouts/MobileFooterNav";
import PageBanner from "./../../../components/Common/PageBanner";
import GgmallItems from "./../../../components/Ggmall/GgmallItems";
import GgmallText from "./../../../components/Ggmall/GgmallText";
import { ggmallKind } from "../../../utils/cmmCode";

const MallDetail = () => {
  const router = useRouter();
  const [, setLoading] = useState({});
  const [content, setContent] = useState("");
  const [options, setOptions] = useState("");
  const [pdKind, setPdKind] = useState("");
  const [pdKindName, setPdKindName] = useState("");
  const [windowSize, setWindowSize] = useState();

  function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 0);

  useEffect(() => {
    const slug = router.query.slug;
    if (slug.length > 1) {
      setPdKind(slug[0]);
      setPdKindName(ggmallKind[slug[0]]);
      const url = `${baseUrl}/mall/${slug[1]}`;
      axios({ method: "get", url })
        .then(({ data }) => {
          console.log("data: ", data);
          setContent(data.product);
          setOptions(data.options);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      router.back();
    }
  }, [router.query.slug]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <PageBanner
        pageTitle={pdKindName}
        homePageUrl={`/ggmall/list/${pdKind}`}
        homePageText={pdKind === "gift" ? "MEMBER PRIVILEGES" : "GG MALL"}
        activePageText={pdKindName}
        activePageUrl={`/ggmall/list/${pdKind}`}
      />

      <GgmallItems content={content} options={options} />
      <GgmallText content={content} />
{/* 
      { windowSize < 768 ?  <>
      <FooterMo />
      <FooterNav />
      </> : 
      <Footer />
      } */}
      <Footer />
      {/* {isMobile && <MobileFooterNav service={selectedService} />} */}
      
    </>
  );
};

export default MallDetail;
