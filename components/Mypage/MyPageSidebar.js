/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import MyLevel from "./MyLevel";
import MyPageMenu from "./MyPageMenu";

const MyPageSidebar = ({ user, menu }) => {
  return (
    <div className="widget-area" id="secondary">
      <MyLevel user={user} />
      <MyPageMenu menu={menu} />
    </div>
  );
};

export default MyPageSidebar;
