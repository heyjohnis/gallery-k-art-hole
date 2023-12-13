import React from "react";
import Link from "next/link";

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70 footer">
        모바일 푸터
      </footer>
    </>
  );
};

export default MobileFooter;
