import React, { useState, useEffect } from "react";
import { POST } from "../../utils/restApi";
import Pagination from "../Pagination";
import Form from "react-bootstrap/Form";
import { NoContent } from "./NoContent";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { dateToString } from "../../utils/dateUtil";

export default function MyPoint({ user }) {
  const [form, setForm] = useState({});
  const [points, setPoints] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getPointData = (currentPage = 1) => {
    POST("/points/paging", {
      ...form,
      currentPage,
      pageSize: 10,
    }).then(({ data }) => {
      console.log(data);
      setPage(data?.pagination || {});
      setPoints(data?.list || []);
    });
  };

  const handleChangeToggleButton = (value) => {
    const dates = setSearchDate(value);
    setForm({ ...form, ...dates });
  };

  const handleChange = (e) => {
    const dates = setSearchDate(e.target.value);
    setForm({ ...form, ...dates });
  };

  const setSearchDate = (term) => {
    if (!term) {
      setStartDate("");
      setEndDate("");
      return {
        start_date: "",
        end_date: "",
      };
    }
    const now = new Date();
    const start_date = dateToString(
      new Date(now.setMonth(now.getMonth() - term))
    );
    setStartDate(start_date);
    const end_date = dateToString(new Date());
    setEndDate(end_date);
    return {
      start_date,
      end_date,
    };
  };

  useEffect(() => {
    getPointData();
  }, [form]);

  const statuslabelColor = (item) => {
    return ["03", "07"].includes(item.resv_stts) ||
      ["10", "02"].includes(item.order_status)
      ? "cancel"
      : "pointDeposit";
  };

  return (
    <div className="mypoint_container">
      <h1>포인트 이용내역</h1>

      <section className="mypoint_content">
        <section className="mypoint_info">
          <ul className="mypoint_info_list">
            {/* TODO: 내용바뀜 */}
            <li>
              <span className="tit">지급 포인트</span>
              <span className="item">
                {parseInt(user?.yearly_point || 0).toLocaleString()} P
              </span>
            </li>
            <li>
              <span className="tit">총 사용 포인트</span>
              <span className="item">
                {(user?.use_point || 0).toLocaleString()} P
              </span>
            </li>
            <li>
              <span className="tit">잔여 포인트</span>
              <span className="item">
                {(
                  parseInt(user?.yearly_point || 0) - (user?.use_point || 0)
                ).toLocaleString()}{" "}
                P
              </span>
            </li>
          </ul>
        </section>
        <section className="mypoint_filter">
          <section className="mb_reser_filter">
            <ToggleButtonGroup
              type="radio"
              name="term"
              defaultValue=""
              onChange={handleChangeToggleButton}
            >
              <ToggleButton id="period-radio-1" value="" className="btn_filter">
                전체
              </ToggleButton>
              <ToggleButton
                id="period-radio-2"
                value="1"
                className="btn_filter"
              >
                1개월
              </ToggleButton>
              <ToggleButton
                id="period-radio-3"
                value="3"
                className="btn_filter"
              >
                3개월
              </ToggleButton>
              <ToggleButton
                id="period-radio-4"
                value="6"
                className="btn_filter"
              >
                6개월
              </ToggleButton>
              <ToggleButton
                id="period-radio-5"
                value="12"
                className="btn_filter"
              >
                1년
              </ToggleButton>
              <ToggleButton
                id="period-radio-6"
                value="36"
                className="btn_filter"
              >
                3년
              </ToggleButton>
            </ToggleButtonGroup>
          </section>
          <div className="period">
            기준일자 : {startDate ? `${startDate} ~ ${endDate}` : "전체"}
          </div>
          <Form.Select aria-label="사용기간" onChange={handleChange}>
            <option value="">사용기간</option>
            <option value="">전체</option>
            <option value="1">1개월</option>
            <option value="3">3개월</option>
            <option value="6">6개월</option>
            <option value="12">1년</option>
            <option value="36">3년</option>
          </Form.Select>
        </section>
        <section className="mypoint_history">
          <h3>포인트 이용내역</h3>
          {points.length === 0 ? (
            <NoContent />
          ) : (
            <>
              <ul className="mypoint_history_list">
                {points.map((item, i) => (
                  <li key={i}>
                    <article className="mypoint_history_items">
                      <span className={`label ${statuslabelColor(item)}`}>
                        {item.resv_status_name || item.order_status_name}
                      </span>
                      <div className="item">
                        <h4>
                          [{item.point_type_name}]{" "}
                          {item.pd_name || item.resv_place || item.resv_name}
                        </h4>
                        <p>사용일시 : {item.point_date}</p>
                      </div>
                    </article>
                    <div className="mypoint_history_amount">
                      {((item.point || 0) * -1).toLocaleString()} P
                    </div>
                  </li>
                ))}
              </ul>
              <Pagination
                pageInfo={page}
                gotoPage={getPointData}
                displayPage={10}
              />
            </>
          )}
        </section>
      </section>
    </div>
  );
}
