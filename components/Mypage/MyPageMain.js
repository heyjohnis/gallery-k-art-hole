/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import MyPageSidebar from "./MyPageSidebar";
import MyPageInfo from "./MyPageInfo";
import Reservation from "./Content/Reservation";
import Point from "./Content/Point";
import Order from "./Content/Order";
import Update from "./Content/Update";
import Contract from "./Content/Contract";
import styles from "./Mypage.module.scss";
import Home from "./Content/Home";

const MyPageMain = ({ user, menu }) => {
  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <MyPageSidebar user={user} menu={menu} />
            </div>
            <div className={`col-lg-9 col-md-12 ${styles.my_con_wrap}`}>
              <MyPageInfo user={user} />
              {menu === "home" && <Home user={user} />}
              {menu === "contract" && <Contract user={user} />}
              {menu === "reservation" && <Reservation user={user} />}
              {menu === "point" && <Point user={user} />}
              {menu === "order" && <Order user={user} />}
              {menu === "update" && <Update user={user} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPageMain;
