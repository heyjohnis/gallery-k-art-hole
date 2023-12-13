import MainBanner from "../../components/Home/MainBanner";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export default function Index({ user }) {
  const router = useRouter();
  const modalRef = useRef(null);
  const showReservationModal = () => {
    if (!user) {
      router.push("/login");
    }
    modalRef.current.showModal();
  };
  return (
    <>
      <div className="main-banner-area">모바일 내용</div>
    </>
  );
}
