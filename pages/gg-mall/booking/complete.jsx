import React from "react";
import { CompleteTitle } from "../../../components/Common/CompleteTitle";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import { ServiceCompleteContent } from "../../../components/Service/ServiceCompleteContent";

export default function servicecomplete() {
  return (
    <div>
      <PageBanner />
      <section className="container">
        <CompleteTitle
          iconUrl={`/images/ggshopping/ico_complete_tit.png`}
          title="제휴서비스 신청이 "
          title2="완료되었습니다!"
          text="담당자 확인 후 포인트 사용이 확정됩니다."
        />
        <ServiceCompleteContent />
      </section>
      <Footer />
    </div>
  );
}
