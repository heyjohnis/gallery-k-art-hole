import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import baseUrl from './../../utils/baseUrl';
import Footer from './../../components/Layouts/Footer';
import PageBanner from './../../components/Common/PageBanner';
import BbsDetailContent from './../../components/News/BbsDetailContent';
import GgmallItems from './../../components/Ggmall/GgmallItems';
import GgmallText from './../../components/Ggmall/GgmallText';

const MallDetail = () => {
    
    const router = useRouter();
    const [loading, setLoading] = useState({});
    const [content, setContent] = useState('');
    
    const cont = router.query.state;

    useEffect(() => {

        setLoading(true);

        const pdNo = router.query.id;
        const url = `${baseUrl}/mall/${pdNo}`;
        axios({ method: "get", url })
            .then( ({data}) => {
                console.log("data: ", data);
                setContent(data);
            })
            .finally( () => {
                setLoading(false);
            });

    }, [router.query.id]);


    return (
        <>
            <PageBanner
                pageTitle="GG몰"
                homePageUrl="/"
                homePageText="Home"
                activePageText='GG몰'
            />
            
            <GgmallItems content={content}/>
            <GgmallText content={content}/>
            
            <Footer />
        </>
    );
};

export default MallDetail;