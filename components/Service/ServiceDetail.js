import React from "react";
import Image from "next/image";
import { ServiceInfo } from "./ServiceInfo";
import { ServiceDetailContent } from "./ServiceDetailContent";

export const ServiceDetail = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-5 p-0 product_img">
          <Image
            src="/images/service/service02.png"
            width="350"
            height="350"
            alt="서비스 이름"
          />
        </div>
        <div className="col-lg-7 p-0">
          <ServiceInfo />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-7 p-0">
          <ServiceDetailContent />
        </div>
      </div>
    </>
  );
};
