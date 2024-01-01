import React, { useState, useEffect } from "react";
import Footer from "../components/Signup/SignupFooter";
import styles from "./sign-up.module.scss";
import { POST } from "../hooks/restApi";
import "react-step-progress/dist/index.css";
import StepProgressBar from "react-step-progress";
import { isValidateForm } from "../utils/validation";
import SignupStep1 from "../components/Signup/SignupStep1";
import SignupStep2 from "../components/Signup/SignupStep2";
import SignupStep3 from "../components/Signup/SignupStep3";
import SignupStep4 from "../components/Signup/SignupStep4";

export default function SignUp() {
  const [form, setForm] = useState({});
  const [validation1, setValidation1] = useState(false);
  const signupStep1 = (
    <SignupStep1 setForm={setForm} form={form} setValidation={setValidation1} />
  );
  const signupStep2 = <SignupStep2 setForm={setForm} />;
  const signupStep3 = <SignupStep3 setForm={setForm} />;
  const signupStep4 = <SignupStep4 setForm={setForm} />;

  const handleSubmit = () => {
    if (typeof form.prefer_service === "object")
      form.prefer_service = form.prefer_service.join(",");
    form.user_name = form.last_name + form.first_name;
    POST("/signup", form).then((res) => {
      console.log(res);
      alert(res?.response?.data?.message);
    });
  };

  const validateStep1 = () => {
    console.log("validateStep1: ", validation1);
    return validation1;
  };

  useEffect(() => {
    console.log("useEffect form: ", form, validation1);
  }, [form]);

  return (
    <>
      <div className={`${styles.signUpWrap}`}>
        <div className={`${styles.signUpPageLeftSection}`}>
          <div className={`${styles.titleWrap}`}>
            <h1>
              <span>Welcome to </span>
              <br />
              GREEN GALLERY
            </h1>
          </div>
        </div>

        <div className={`${styles.signUpPageRightSection}`}>
          <div className={`${styles.pageWrap}`}>
            <StepProgressBar
              startingStep={0}
              onSubmit={handleSubmit}
              subtitleClass={styles.subtitleClass}
              previousBtnName="Back"
              steps={[
                {
                  content: signupStep1,
                },
                {
                  content: signupStep2,
                },
                {
                  content: signupStep3,
                },
                {
                  content: signupStep4,
                },
              ]}
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
