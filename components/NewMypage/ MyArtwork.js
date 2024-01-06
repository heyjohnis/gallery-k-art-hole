import Link from 'next/link'
import React from 'react'

export const  MyArtwork = () => {
  return (
    <div className='mapage_content_item'>
      <h2>나의 보유 작품</h2>
      <ul className='artwork_list'>
        <li>
          <div className='artwork_items'>
            <div className='artwork_img'>
              <img src="/images/mypage/myartwork_01.png"/>
            </div>
            <article>
              <div>
                <h5>생명의 샘 ‧ 자연으로부터 생명의 씨II 2222</h5>
                <p>김복동</p>
              </div>
              <div className='art_price'>18,000,000 원</div>
            </article>
          </div>
          <Link href="#">작품상세</Link>
        </li>
        <li>
          <div className='artwork_items'>
            <div className='artwork_img'>
              <img src="/images/mypage/myartwork_01.png"/>
            </div>
            <article>
              <div>
                <h5>생명의 샘 ‧ 자연으로부터 생명의 씨II 2222</h5>
                <p>김복동</p>
              </div>
              <div>18,000,000 원</div>
            </article>
          </div>
          <Link href="#">작품상세</Link>
        </li>
        <li>
          <div className='artwork_items'>
            <div className='artwork_img'>
              <img src="/images/mypage/myartwork_01.png"/>
            </div>
            <article>
              <div>
                <h5>생명의 샘 ‧ 자연으로부터 생명의 씨II 2222</h5>
                <p>김복동</p>
              </div>
              <div>18,000,000 원</div>
            </article>
          </div>
          <Link href="#">작품상세</Link>
        </li>
      </ul>
    </div>
  )
}
