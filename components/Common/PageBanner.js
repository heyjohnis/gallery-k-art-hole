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
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
