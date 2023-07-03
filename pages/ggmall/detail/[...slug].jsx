import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import baseUrl from "./../../../utils/baseUrl";
import Footer from "./../../../components/Layouts/Footer";
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

  return (
    <>
      <PageBanner
        pageTitle={pdKindName}
        homePageUrl={`/ggmall/list/${pdKind}`}
        homePageText="GG MALL"
        activePageText={pdKindName}
        activePageUrl={`/ggmall/list/${pdKind}`}
      />

      <GgmallItems content={content} options={options} />
      <GgmallText content={content} />

      <Footer />
    </>
  );
};

export default MallDetail;
