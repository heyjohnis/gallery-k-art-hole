import MainBanner from "../../components/Home/MainBanner";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Main from "../../components/Home/MobileMain"
import styles from "../../components/Layouts/navbar.mobile.module.scss";

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
      <Main />
    </>
  );
}
