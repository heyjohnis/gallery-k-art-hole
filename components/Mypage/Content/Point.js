import React from 'react';
import styles from "../Mypage.module.scss";

const Point = ({ user }) => {
    return (
        <div className="container">
            <div className={styles.content}>
                포인트사용 내역이 없습니다. 
            </div>
        </div>
    );
};

export default Point;