import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import GgShoppingListPc from '../../components/GgShopping/GgShoppingListPc';
import Footer from '../../components/Layouts/Footer';

export default function list() {
  return (
    <div>
      <PageBanner
        pageTitle="GG쇼핑"
        homePageUrl="/booking/"
        homePageText="GG shopping"
        activePageText="GG shopping"
      />
      <section className="container">
        <GgShoppingListPc/>
      </section>
      <Footer/>
    </div>
  );
}

