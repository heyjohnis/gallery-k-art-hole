/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import styles from "../Mypage.module.scss";
import { commaFormat, hyphenForPhone } from "../../../utils/number";

const OrderComp = ({ order }) => {
  console.log("order: ", order);
  const [isShow, setIsShow] = useState(false);

  const showDetail = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <Table className={styles.table_membership}>
        <thead>
          <tr>
            <th></th>
            <th>주문일시</th>
            <th>주문상태</th>
            <th>주문내용</th>
            <th>포인트</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={order.thumb_img} width="120px" />
            </td>
            <td className="text-center">{order.order_date}</td>
            <td className="text-center">{order.order_status}</td>
            <td>{order.pd_name}</td>
            <td className="text-right">
              {commaFormat(order.total_price || 0)} P
            </td>
            <td>
              <button className="btn" onClick={showDetail}>
                상세보기
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      {isShow && (
        <Table className="order_detail">
          <tbody>
            <tr>
              <td className="text-center">상세내용</td>
              <td colSpan="5">
                <div className="order_detail">
                  {order.pd_name}
                  <span
                    className="option_detail"
                    dangerouslySetInnerHTML={{
                      __html: order.pd_option ? " " + order.pd_option : "",
                    }}
                  ></span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-center">받으시는 분</td>
              <td colSpan="5">
                {order.delivery_user_name} (전화번호:{" "}
                {hyphenForPhone(order.delivery_phone)})
              </td>
            </tr>
            <tr>
              <td className="text-center">배송정보</td>
              <td colSpan="5">
                ({order.delivery_zipcode}) {order.delivery_addr1}{" "}
                {order.delivery_addr2}
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderComp;
