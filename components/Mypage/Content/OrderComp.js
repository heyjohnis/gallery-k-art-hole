/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import styles from "../Mypage.module.scss";
import { commaFormat, hyphenForPhone } from "../../../utils/number";

const OrderComp = ({ order }) => {
  console.log("order: ", order);
  const [isShow, setIsShow] = useState(false);
  const [toggle, setToggle] = useState("toggle_on");

  const showDetail = () => {
    setIsShow(!isShow);
    setToggle(!isShow ? "toggle_off" : "toggle_on");
  };

  return (
    <>
      <Table className={styles.order_info}>
        <tbody>
          <tr>
            <td width="100px">
              <img src={order.thumb_img} width="100px" />
            </td>
            <td width="*">
              {order.order_date}
              <br />[{order.order_status}] {order.pd_name}
              <br />
              {commaFormat(order.total_price || 0)} P
            </td>
            <td width="50px">
              <div
                className={`${styles.btn_detail} ${toggle}`}
                onClick={showDetail}
              >
                상세보기
              </div>
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
