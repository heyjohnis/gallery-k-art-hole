import React, { useState } from 'react';
import styles from "../Mypage.module.scss";
import SignupComp from '../../Signup/SignupComp';

const Update = ({ user }) => {
    const [validPassword, setValidPassword] = useState(false);

    return (

        <div className="container">
        {
            validPassword ? 
                <div> 페스워드 입력 </div>
            :

            <div className="user-area-all-style sign-up-area mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SignupComp compType={'mod'} user={user} />
                        </div>
                    </div>
                </div>
            </div>
                
        }
        </div>
    );
};

export default Update;