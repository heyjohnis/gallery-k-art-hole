import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";

import ArtworkCard from "./ArtworkCard";

const INITIAL_SEARCH_FORM = {
  search_start_price: 0,
  search_end_price: 0,
  search_keyword: "",
};

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });
  const [form, setForm] = useState(INITIAL_SEARCH_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const gotoPage = (pageNumber) => {
    console.log("pageNumber: ", pageNumber);
    setPage((prevState) => ({ ...prevState, currentPage: pageNumber }));
    const url = `${baseUrl}/artworks`;
    const medq_token = cookie.get("medq_token");
    const payload = { ...form, ...page, currentPage: pageNumber };

    axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${medq_token}` },
      data: payload,
    }).then(({ data }) => {
      console.log("data: ", data);
      setArtworks(data.list);
      setPage(data.pagination);
    });
  };

  useEffect(() => {
    gotoPage(1);
  }, []);

  useEffect(() => {
    gotoPage(1);
  }, [form]);

  return (
    <section className="team-area ptb-100">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-1 col-md-1 text-center d-flex align-items-center justify-content-center mb-3">
            작품가격
          </div>
          <div className="col-lg-2 col-md-12 mr-0 pr-0 d-flex mb-3">
            <input
              className="form-control"
              type="number"
              name="search_start_price"
              placeholder=""
              value={form.search_start_price}
              maxLength={6}
              onChange={handleChange}
            />
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50px" }}
            >
              ~
            </div>
          </div>
          <div className="col-lg-2 col-md-12 ml-0 pl-0 lg-pl-3 d-flex align-items-center justify-content-center mb-3">
            <input
              className="form-control"
              type="number"
              name="search_end_price"
              value={form.search_end_price}
              placeholder=""
              maxLength={6}
              onChange={handleChange}
            />
            <div className="text-center" style={{ width: "60px" }}>
              만원
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-3">
            <input
              className="form-control"
              type="text"
              name="search_keyword"
              value={form.search_keyword}
              placeholder="작품명이나 작품번호를 입력하세요"
              maxLength={15}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-3 col-md-12 text-right mb-3">
            <button
              type="submit"
              className="default-btn btn-reset"
              onClick={() => setForm(INITIAL_SEARCH_FORM)}
            >
              초기화
            </button>
            <button
              type="submit"
              className="default-btn btn-two"
              onClick={() => gotoPage(1)}
            >
              검색
            </button>
          </div>
        </div>
        <div className="row">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.atwk_no} artwork={artwork} />
          ))}
        </div>
      </div>
      <Pagination page={page} goto={gotoPage} />
    </section>
  );
};

export default ArtworkList;
