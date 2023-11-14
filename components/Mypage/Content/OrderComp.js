/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import styles from "../Mypage.module.scss";
import { commaFormat, hyphenForPhone } from "../../../utils/number";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

const OrderComp = ({ order }) => {
  console.log("order: ", order);
  console.log("baseUrl: ", baseUrl);
  const [isShow, setIsShow] = useState(false);
  const [toggle, setToggle] = useState("toggle_on");

  const showDetail = () => {
    setIsShow(!isShow);
    setToggle(!isShow ? "toggle_off" : "toggle_on");
  };

  const cancelOrder = (order_no) => {
    console.log("cancelOrder: ", order_no);
    const url = `${baseUrl}/mall/order/cancel`;
    console.log("url: ", url);
    axios({ method: "post", url, data: { order_no } })
      .then(({ data }) => {
        console.log("data: ", data);
        alert("주문이 취소되었습니다.");
        location.reload();
      })
      .catch((error) => {
        console.log("error: ", error);
      });
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
              {/* [{order.order_status}]  */}
              <br />{order.pd_name}
              <br />
              {commaFormat(order.total_price || 0)} P
            </td>
            <td width="50px">
              <div
                style={{ textAlign: 'center' }}
                className={`${styles.btn_detail} ${toggle}`}
                onClick={showDetail}
              >
                상세보기
              </div>
              <div style={{ display: 'flex', marginTop: '20px' }}>
                [{order.order_status}]
                {["01", "09"].includes(order.order_status_code) && (
                  <div
                    style={{ marginLeft: '10px' }}
                    className={`default-btn ${styles.btn} ${styles.btn_conform}`}
                    onClick={() => cancelOrder(order.order_no)}
                  >
                    신청취소
                  </div>
                )}
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
