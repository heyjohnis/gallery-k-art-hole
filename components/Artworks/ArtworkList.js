import React from "react";
import Pagination from "../Pagination";
import ArtworkThumbnail from "./ArtworkThumbnail";

const ArtworkList = () => {
  const artworks = [
    { atwk_no: 1234, atwk_name: "무제", atwk_price: "100000", atwk_img: "" },
    { atwk_no: 1235, atwk_name: "무제", atwk_price: "100000", atwk_img: "" },
  ];
  return (
    <section className="team-area ptb-100">
      <div className="container">
        {artworks.map((artwork) => (
          <ArtworkThumbnail key={artwork.atwk_no} artwork={artwork} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ArtworkList;
