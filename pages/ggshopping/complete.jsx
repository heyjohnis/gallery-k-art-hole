import React from "react";
import { CompleteTitle } from "../../components/Common/CompleteTitle";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import GgShoppingComplete from "../../components/GgShopping/GgShoppingComplete";
import RecommendService from "../../components/RecommendService";

export default function complete() {
  return (
    <div>
      <PageBanner />
      <section className="container">
        <CompleteTitle
          iconUrl={`/images/ggshopping/ico_complete_tit.png`}
          title="GG 쇼핑 상품이 "
          title2="신청되었습니다!"
          // text="담당자 확인 후 예약 안내드리겠습니다."
        />
        <GgShoppingComplete />
        {/* <RecommendService /> */}
      </section>
      <Footer />
    </div>
  );
}
