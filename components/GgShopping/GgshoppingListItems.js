import React from 'react';

export default function GgshoppingListItems() {

  const productSale = "sale";

  return (
    <div className='shopping_list_container row'>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
            <img src="/images/ggshopping/product01.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>여성 캐주얼 캐디백</h3>
            <p>BOGNER</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product02.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>여성 캐주얼 보스턴백</h3>
            <p>BOGNER</p>
            <div className={`product_price_info`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>550,000 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product03.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>남성 배색 캐디백</h3>
            <p>BOGNER</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product04.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>남성 배색 보스턴백</h3>
            <p>BOGNER</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product05.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>남성 자카드 캐디백</h3>
            <p>BOGNER</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product06.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>남성 자카드 보스턴백</h3>
            <p>BOGNER</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product07.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>말리 블랙휠 스탠드 캐디백</h3>
            <p>EISEN HEIM</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product08.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>말리 블랙 보스턴백</h3>
            <p>EISEN HEIM</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='items'>
          <div className='list_img'>
          <img src="/images/ggshopping/product09.png" alt="상품사진"/>
          </div>
          <div className='list_product'>
            <h3>말리 화이트휠 스탠드 캐디백</h3>
            <p>EISEN HEIM</p>
            <div className={`product_price_info ${productSale}`}>
              {/* TODO: 세일일때만 style추가 ${productSale}*/}
              <span className='label_sale'>SALE</span>
              <span className='product_sales'>10% </span>
              <span className='product_price'>862,200 P</span>
              <span className='product_ori'>958,000 P</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

