import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import GgShoppingFilter from "./GgShoppingFilter";
import GgshoppingListItems from "./GgshoppingListItems";
import { POST } from "../../utils/restApi";
import Pagination from "../Pagination";
import { calcDiscount } from "../../utils/price";
import { useDebouncedCallback } from "use-debounce";
import { ggmallKind } from "../../utils/cmmCode";

export default function GgShoppingListPc({ user, pdKind }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    debounced(name, value);
  };
  const debounced = useDebouncedCallback((name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  }, 1000);

  const getGgShoppingList = (currentPage = 1) => {
    POST(`/mall/paging`, {
      ...form,
      pd_kind: pdKind || "",
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
      console.log("getGgShoppingList res: ", items);
    });
  };

  useEffect(() => {
    console.log("form: ", form);
    getGgShoppingList();
  }, [form]);

  useEffect(() => {
    if (user?.membership) getGgShoppingList();
  }, [pdKind, user]);

  return (
    <>
      <div className="shopping_tit">
        <div className="tit">
          <h1>{ggmallKind[pdKind]}</h1>
          <span>{`GG Mall > ${ggmallKind[pdKind]}`}</span>
        </div>
        <div>
          <Form.Control
            type="text"
            name="search_word"
            placeholder="Search"
            className="shopping_search"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="shopping_tit_mb">
        <ul className="mypage_tab_menu">
          <li className="active">제휴서비스</li>
          <li className="">GG 투어</li>
          <li className="">GG 쇼핑</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <GgShoppingFilter form={form} setForm={setForm} pdKind={pdKind} />
        </div>
        <div className="col-lg-10">
          <GgshoppingListItems items={items} pdKind={pdKind} />
          <Pagination
            pageInfo={page}
            gotoPage={getGgShoppingList}
            displayPage="5"
          />
        </div>
      </div>
    </>
  );
}
