import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import Footer from '../../../components/Layouts/Footer';
import PageBanner from '../../../components/Common/PageBanner';
import BbsDetailContent from '../../../components/News/BbsDetailContent';

const BbsDetail = () => {
    
    const router = useRouter();
    const [loading, setLoading] = useState({});
    const [content, setContent] = useState('');
    
    const bbs = {news: '뉴스', event: '이벤트', media: '미디어', notice: '공지사항'};

    const cont = router.query.state;

    useEffect(() => {

        setLoading(true);

        const bbsNo = router.query.all[0];
        const url = `${baseUrl}/bbs/detail/${bbsNo}`;
        axios({ method: "get", url })
            .then( ({data}) => {
                console.log("data: ", data);
                setContent(data);
            })
            .finally( () => {
                setLoading(false);
            });

    }, [router.query.all[0]]);


    return (
        <>
            <PageBanner
                pageTitle={bbs[content.category]}
                homePageUrl="/"
                homePageText="Home"
                activePageText={bbs[content.category]}
            />
            
            <BbsDetailContent content={content} />

            <Footer />
        </>
    );
};

export default BbsDetail;