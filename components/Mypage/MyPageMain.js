import Link from "next/link";
import MyPageSidebar from './MyPageSidebar';
import MyPageInfo from './MyPageInfo';
import Membership from "./Content/Membership";
import Reservation from "./Content/Reservation";
import Point from "./Content/Point";
import Order from "./Content/Order";
import Update from "./Content/Update";
import LvBlack from './LvBlack';
import LvPlatinum from './LvPlatinum';
import LvGreen from './LvGreen';
import LvBlue from './LvBlue';
import LvRed from './LvRed';
import LvPurple from './LvPurple';


const MyPageMain = ({ user, menu }) => {
  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <MyPageSidebar user={user} menu={menu} />
            </div>
            <div className="col-lg-9 col-md-12">
              <MyPageInfo user={user} />
              {menu === 'membership' && <Membership user={user} /> }
              {menu === 'reservation' && <Reservation user={user} /> }
              {menu === 'point' && <Point user={user} /> }
              {menu === 'order' && <Order user={user} /> }
              {menu === 'update' && <Update user={user} /> }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPageMain;
