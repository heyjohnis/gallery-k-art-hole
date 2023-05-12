import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import baseUrl from './../../utils/baseUrl';
import Footer from './../../components/Layouts/Footer';
import PageBanner from './../../components/Common/PageBanner';
import GgmallList from '../../components/Ggmall/GgmallList';

const BbsDetail = () => {
    
    const router = useRouter();
    const [loading, setLoading] = useState({});
    const [contents, setContents] = useState('');
    
    const cont = router.query.state;

    useEffect(() => {

        setLoading(true);

        const url = `${baseUrl}/mall`;
        axios({ method: "get", url })
            .then( ({data}) => {
                setContents(data);
            })
            .finally( () => {
                setLoading(false);
            });

    }, []);


    return (
        <>
            <PageBanner
                pageTitle="GG몰"
                homePageUrl="/"
                homePageText="Home"
                activePageText='GG몰'
            />
            
            <GgmallList contents={contents}/>
            
            <Footer />
        </>
    );
};

export default BbsDetail;