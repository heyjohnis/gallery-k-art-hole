import React from "react";
import Link from "next/link";
import MyLevel from './MyLevel';
import MyPageMenu from './MyPageMenu';

const MyPageSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <MyLevel/>
        <MyPageMenu/>

      </div>
    </>
  );
};

export default MyPageSidebar;
