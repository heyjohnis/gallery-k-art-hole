import React from "react";
import Link from "next/link";
import styles from "./Mypage.module.scss"; 

const MyLevel = ({ user }) => {

  let membershipStyle;
  switch( user.membership ) {
    case 'green': membershipStyle = styles.green; break;
    case 'red': membershipStyle = styles.red; break;
    case 'blue': membershipStyle = styles.blue; break;
    case 'purple': membershipStyle = styles.purple; break;
    case 'black': membershipStyle = styles.black; break;
    case 'platinum': membershipStyle = styles.platinum; break;
  }
    
  return (
    <>
      <div className={`${styles.widget} ${membershipStyle}`}>
        <article className="row">
          <div className={`col-4 col-sm-3 col-lg-12 ${styles.level}`}>
            <div className={`${styles.thumb}`}>
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
