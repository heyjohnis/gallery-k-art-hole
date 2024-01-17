import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import GgShoppingFilter from "./GgShoppingFilter";
import GgshoppingListItems from "./GgshoppingListItems";
import { POST } from "../../hooks/restApi";
import Pagination from "../Pagination";
import { calcDiscount } from "../../utils/price";

export default function GgShoppingListPc({ user }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });

  const getGgShoppingList = (currentPage) => {
    POST(`/mall/paging`, {
      pd_kind: "shop",
      currentPage: currentPage || 1,
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
    if (user?.membership) getGgShoppingList();
  }, [user]);

  return (
    <>
      <div className="shopping_tit">
        <div>
          <h1>GG 쇼핑</h1>
          <span>{`GG Mall > GG 쇼핑`}</span>
        </div>
        <div>
          <Form.Control
            type="text"
            placeholder="Search"
            className="shopping_search"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <GgShoppingFilter />
        </div>
        <div className="col-lg-10">
          <GgshoppingListItems items={items} />
<<<<<<< HEAD
          <Pagination
            pageInfo={page}
            gotoPage={getGgShoppingList}
            displayPage="5"
          />
=======
          <Pagination pageInfo={page} gotoPage={getGgShoppingList} />
>>>>>>> b42858b0c313394b6bd29fda5c5f0ab1451ab894
        </div>
      </div>
    </>
  );
}
