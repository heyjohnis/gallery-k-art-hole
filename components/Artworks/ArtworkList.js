import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";

import ArtworkThumbnail from "./ArtworkThumbnail";

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });

  const getArtworkData = () => {
    const url = `${baseUrl}/artworks`;
    const medq_token = cookie.get("medq_token");
    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: page,
    })
      .then(({ data }) => {
        console.log("data: ", data);
        setArtworks(data.list);
        setPage(data.pagination);
      })
      .finally(() => {});
  };

  const gotoPage = (pageNumber) => {
    console.log("pageNumber: ", pageNumber);
    setPage((prevState) => ({ ...prevState, currentPage: pageNumber }));
  };

  useEffect(() => {
    getArtworkData();
  }, [page.currentPage]);

  return (
    <section className="team-area ptb-100">
      <div className="container">
        <div className="row">
          {artworks.map((artwork) => (
            <ArtworkThumbnail key={artwork.atwk_no} artwork={artwork} />
          ))}
        </div>
      </div>
      <Pagination page={page} goto={gotoPage} />
    </section>
  );
};

export default ArtworkList;
