import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import baseUrl from './../utils/baseUrl';
import Footer from './../components/Layouts/Footer';
import PageBanner from './../components/Common/PageBanner';
import OrderInfo from '../components/Ggmall/OrderInfo';
import OrderForm from '../components/Ggmall/Orderform';


export default function GgmailDetail() {

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
        pageTitle="결제하기"
        homePageUrl="/"
        homePageText="Home"
        activePageText="결제하기"
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <OrderInfo content={content}/>
          </div>
          <div className="col-12 col-md-8 mt-50">
            <OrderForm/>
          </div>
          <div className="col-12 col-md-4 mt-50">
            <OrderForm/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
