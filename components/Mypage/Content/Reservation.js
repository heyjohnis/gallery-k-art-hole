import React from 'react';
import styles from "../Mypage.module.scss";

const Reservation = ({ user }) => {
    return (
        <div className="container">
            <div className={styles.content}>
                예약 내역이 없습니다.
            </div>
        </div>
    );
};

export default Reservation;