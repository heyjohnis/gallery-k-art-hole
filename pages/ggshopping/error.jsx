import React from "react";
import { CompleteTitle } from "../../components/Common/CompleteTitle";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import RecommendService from "../../components/RecommendService";

export default function error() {
  return (
    <div>
      <PageBanner />
      <CompleteTitle
        iconUrl={`/images/ggshopping/ico_error_tit.png`}
        title="제품을 "
        title2="담아주세요"
        text="그린갤러리의 다양한 제휴서비스와 엄선된 상품을 만나보세요."
      />
      <button className="btn_white">상품 담으러 가기</button>
      {/* <RecommendService /> */}
      <Footer />
    </div>
  );
}
