import React, { useState, useRef } from "react";
import styles from "./Ggmall.module.scss";

export default function OrderForm() {

    return (
    <>

            <form method="post">
                <div className="row">

                    <div className="form-heading mt-20">
                        <h3 className="form-title">주문하시는 분</h3>
                    </div>

                    <div className="form-group signup">
                        <div className="col-md-3 col-sm-3">
                        <p>
                            이름 <span className={styles.sup}>*</span>
                        </p>
                        </div>
                        <div className="col-md-9 col-sm-9 signup">
                        <input
                            className="form-control"
                            type="text"
                            name="user_name"
                            placeholder="이름을 입력하세요."
                        />
                        </div>
                    </div>

                    <div className="form-group signup">
                        <div className="col-md-3 col-sm-3">
                        <p>
                            휴대전화 <span className={styles.sup}>*</span>
                        </p>
                        </div>
                        <div className="col-md-9 col-sm-9 signup">
                            <input
                                className="form-control"
                                type="text"
                                name="mobile"
                                id="form1"
                                maxLength={15}
                            />
                        </div>
                    </div>

                    <div className="form-group signup">
                        <div className="col-md-3 col-sm-3">
                        <p>
                            이메일 <span className={styles.sup}>*</span>
                        </p>
                        </div>
                        <div className="col-md-9 col-sm-9 signup">
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="이메일을 입력하세요."
                        />
                        </div>
                    </div>

                    <div className="form-group signup">
                        <div className="col-md-3 col-sm-3">
                        <p>딜러코드</p>
                        </div>
                        <div className="col-md-9 col-sm-9 signup">
                        <input
                            className="form-control"
                            type="text"
                            name="dlr_cd"
                            placeholder="딜러코드를 입력하세요."
                        />
                        </div>
                    </div>
                </div>
            </form>
    </>
  );
}
