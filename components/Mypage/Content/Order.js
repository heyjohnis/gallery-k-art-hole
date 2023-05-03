import React from 'react';
import styles from "../Mypage.module.scss";

const Order = ({ user }) => {
    return (
        <div className="container">
            <div className={styles.content}>
                주문/배송 내역이 없습니다.
            </div>
        </div>
    );
};

export default Order;