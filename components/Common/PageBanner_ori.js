/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  activePageUrl = "#",
}) => {
  return (
    <>
      <div className="offer-area page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>
                <Link href={activePageUrl}>{activePageText}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="offer-shape">
          <img src="/images/shape/services-shape/1_1.png" alt="Image" />
          <img src="/images/shape/services-shape/2_1.png" alt="Image" />
          <img src="/images/shape/services-shape/3.png" alt="Image" />
          <img src="/images/shape/services-shape/4.png" alt="Image" />
          <img src="/images/shape/services-shape/5.png" alt="Image" />
          <img src="/images/shape/services-shape/6.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default PageBanner;
