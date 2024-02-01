import React, { useState, useEffect } from "react";
import { Form, Pagination } from "react-bootstrap";
import { ServiceFilter } from "./ServiceFilter";
import { ServiceListItems } from "./ServiceListItems";
import { POST } from "../../utils/restApi";
import { calcDiscount } from "../../utils/price";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";
export default function ServiceListPc({ user }) {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [items, setItems] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });
  const [pdKind, setPdKind] = useState("");

  const getServiceData = (currentPage = 1) => {
    POST(`/mall/paging`, {
      ...form,
      pd_kind: pdKind,
      currentPage,
      pageSize: 16,
      membership: user?.membership,
      service_group: user?.service_group,
    }).then((res) => {
      setPage(res?.data?.pagination);
      const items = res?.data?.list?.map((item) => {
        return { ...item, ...calcDiscount(item.origin_price, item.price) };
      });
      setItems(items);
    });
  };

  useEffect(() => {
    if (user?.membership) getServiceData();
  }, [user]);

  useEffect(() => {
    console.log("form: ", form);
    getServiceData();
  }, [form]);

  useEffect(() => {
    if (router.query) {
      setPdKind(router.query.slug);
    }
  }, [router.query]);

  return (
    <>
      <div className="shopping_tit">
        <div className="tit">
          <h1>제휴서비스</h1>
          <span>{`GG Mall > 제휴서비스`}</span>
        </div>
        <div>
          <Form.Control
            type="text"
            name="search_word"
            placeholder="Search"
            className="shopping_search"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <ServiceFilter form={form} setForm={setForm} />
        </div>
        <div className="col-lg-10">
          <ServiceListItems serviceItems={items} />
          <Pagination
            pageInfo={page}
            gotoPage={getServiceData}
            displayPage="5"
          />
        </div>
      </div>
    </>
  );
}
