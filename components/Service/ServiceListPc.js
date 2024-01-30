import React from "react";
import { Form, Pagination } from "react-bootstrap";
import { ServiceFilter } from "./ServiceFilter";
import { ServiceListItems } from "./ServiceListItems";

export const ServiceListPc = () => {
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
          <ServiceFilter />
        </div>
        <div className="col-lg-10">
          <ServiceListItems />
          <Pagination pageInfo="" gotoPage="" displayPage="5" />
        </div>
      </div>
    </>
  );
};
