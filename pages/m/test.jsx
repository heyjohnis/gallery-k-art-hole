import MainBanner from "../../components/Home/MainBanner";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
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
      {/* <header>
        <div></div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 9C12.2091 9 14 7.20914 14 5C14 2.79086 12.2091 1 10 1C7.79086 1 6 2.79086 6 5C6 7.20914 7.79086 9 10 9Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 21C1 16.2136 5.02943 12.3334 10 12.3334C14.9706 12.3334 19 16.2136 19 21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path d="M1 1H21" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 9H21" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 17H21" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div>

        </div>
      </header> */}
    </>
  );
}
