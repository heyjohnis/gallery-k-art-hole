/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";


const PageBreadCrumb = ({
    pageTitle,
    homePageUrl,
    homePageText,
    activePageText,
    activePageUrl = "#",
  }) => {
    return (
      <div className='bread'>
        <h2>{pageTitle}</h2>
        <div className='item_crumb'>
          <Link href={homePageUrl} className='txt_breadcrumb'>{homePageText}</Link>
          <span className='txt_breadcrumb'>{`>`}</span>
          <Link href={activePageUrl} className='txt_breadcrumb'>{activePageText}</Link>
        </div>
      </div>
    );
  };

export default PageBreadCrumb;