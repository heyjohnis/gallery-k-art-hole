import React from 'react';
import styles from "../Mypage.module.scss";

const Contract = ({ user }) => {
    return (
        <div className="container">
            <div className={styles.content}>
                계약 내역이 없습니다.
            </div>
        </div>
    );
};

export default Contract;