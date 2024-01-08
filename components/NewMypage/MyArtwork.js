import React, { useEffect, useState } from "react";
import Link from "next/link";
import { POST } from "../../hooks/restApi";
import { commaFormat } from "../../utils/number";

export const MyArtwork = ({ user }) => {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    if (user.cntc_no) {
      POST("/mypage/artwork", { cntc_no: user.cntc_no }).then(({ data }) => {
        console.log("artworks: ", data);
        setArtworks(data);
      });
    }
  }, [user]);

  return (
    <div className="mypage_content_item">
      <h2>나의 보유 작품</h2>
      <ul className="artwork_list">
        {artworks.map((artwork, i) => (
          <li key={i}>
            <div className="artwork_items">
              <div className="artwork_img">
                <img
                  src={`https://www.artnomics.co.kr/data/artworks/${artwork.atwk_no}/thumb-image_286.jpg`}
                />
              </div>
              <article>
                <div>
                  <h5>{artwork.atwk_nm}</h5>
                  <p>{artwork.atst_nm}</p>
                </div>
                <div className="art_price">{commaFormat(artwork.price)}원</div>
              </article>
            </div>
            <Link href="#">작품상세</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
