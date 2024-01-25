import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import GgShoppingDetail from '../../components/GgShopping/GgShoppingDetail';
import Footer from '../../components/Layouts/Footer';

export default function detail() {
  return (
    <div>
      <PageBanner/>
      <section className="shopping_detail">
        <GgShoppingDetail/>
      </section>
      <Footer/>
    </div>
  );
}

