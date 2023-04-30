import React from "react";

const MyLevel = ({ user }) => {
  return (
    <>
      <div className="widget widget-posts-thumb">
        <div className="post-wrap">
          <article className="item">
            <div className="thumb">
              <span className="fullimage black">BLACK</span>
            </div>

            <div className="info">
              <h4 className="title usmall">
                {user.user_name} <span>({user.login_id})</span>
              </h4>
              <p>최대 월 7회 / 연 83회</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default MyLevel;
