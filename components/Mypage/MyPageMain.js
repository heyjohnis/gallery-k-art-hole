import Link from "next/link";
import MyPageSidebar from './MyPageSidebar';
import MyPageInfo from './MyPageInfo';
import LvBlack from './LvBlack';
import LvPlatinum from "./LvPlatinum";

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
              { user.membership === 'black' ? <LvBlack/> : <LvPlatinum/> }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPageMain;
