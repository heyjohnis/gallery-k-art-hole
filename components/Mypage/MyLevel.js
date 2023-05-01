import React from "react";
import Link from "next/link";
import styles from "./Mypage.module.scss"; 

const MyLevel = ({ user }) => {

  return (
    <>
      <div className={`${styles.widget} ${styles.black}`}>
        <article className="row">
          <div className={`col-4 col-sm-3 col-lg-12 ${styles.level}`}>
            <div className={`${styles.thumb} ${styles.black}`}>
              <span className="black">{(user.membership || "").toUpperCase()}</span>
            </div>
          </div> 
          <div className='col-8 col-sm-9 col-lg-12'>
            <div className={styles.info}>
              <div className={styles.txt}>
                <h4>{user.user_name}</h4>
                <span>{user.login_id}</span>
              </div>
              <div className={styles.txt}>
                <h4>혜택</h4>
                <span>최대 월 {user.monthly_count}회 / 연 {user.yearly_count}회</span>
              </div>
            </div>
          </div>
        </article>     
      </div>
    </>
  );
};

export default MyLevel;
