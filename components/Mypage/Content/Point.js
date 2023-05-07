import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import styles from "../Mypage.module.scss";

import baseUrl from '../../../utils/baseUrl';

const Point = ({ user }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
    
        const url = `${baseUrl}/points`;
        const medq_token = cookie.get("medq_token");
        axios({ method: "post", url: url, headers: { Authorization: `Bearer ${medq_token}` }, data: {} })
            .then(({ data }) => {
                console.log("data: ", data);

            })
            .finally(() => {
                setLoading(false);
            });
        }, []
      );

    return (
        <div className="container">
            <div className={styles.content}>
                포인트사용 내역이 없습니다. 
            </div>
        </div>
    );
};

export default Point;