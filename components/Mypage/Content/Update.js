/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "../Mypage.module.scss";
import SignupComp from "../../Signup/SignupComp";

const Update = ({ user }) => {
  return (
    <div className="container">
      <div className="user-area-all-style sign-up-area mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SignupComp compType={"mod"} user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
