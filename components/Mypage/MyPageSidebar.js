import MyLevel from "./MyLevel";
import MyPageMenu from "./MyPageMenu";

const MyPageSidebar = ({ user }) => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <MyLevel user={user} />
        <MyPageMenu />
      </div>
    </>
  );
};

export default MyPageSidebar;
