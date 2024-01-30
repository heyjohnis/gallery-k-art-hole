import Link from "next/link";
import React from "react";
import RecommendService from "../RecommendService";

export const ServiceDetailContent = () => {
  return (
    <div class="detail_content">
      <ul className="detail_menu">
        <li>
          <Link href="#product">상품소개</Link>
        </li>
        <li>
          <Link href="#info">상품안내</Link>
        </li>
        <li>
          <Link href="#reservation">예약안내</Link>
        </li>
        <li>
          <Link href="#inquiry">문의사항</Link>
        </li>
      </ul>
      <div className="products_detail">
        <div id="product" className="detail_item">
          <img src="/images/service/service_detail01.png" />
        </div>
        <div className="detail_item">
          <h2 id="info">상품 안내</h2>
          <ul className="detail_info">
            <li>
              <span className="tit">상세정보</span>
              <span className="bar">ㅣ</span>
              <span className="txt">1박 기준 / 기본 2인 / 스탠다드 더블</span>
            </li>
            <li>
              <span className="tit">주소</span>
              <span className="bar">ㅣ</span>
              <span className="txt">
                제주특별자치도 제주시 삼무로 56(연동) 제주 에어시티 호텔
              </span>
            </li>
            <li>
              <span className="tit">탑승장소</span>
              <span className="bar">ㅣ</span>
              <span className="txt">체크인 14시 / 체크아웃 12시</span>
            </li>
            <li>
              <span className="tit">시설</span>
              <span className="bar">ㅣ</span>
              <span className="txt">
                유ㆍ무선 인터넷, 고급 오리털 베개, 냉장고 겸용 미니바, 생수 2병
                및 각종 티서비 스, 샴푸, 린스, 로션, 바디클렌져,
                신문서비스(요청시), WAKE UP 서비스, 슬리퍼 및 헤어드라이기
              </span>
            </li>
            <li>
              <span className="tit">조식이용</span>
              <span className="bar">ㅣ</span>
              <span className="txt">
                사전예약 : 10,000원 / 현장예약 : 12,000원
              </span>
            </li>
            <li>
              <span className="tit">유의사항</span>
              <span className="bar">ㅣ</span>
              <span className="txt">
                인원은 2인 기준으로 인원 추가 시 1인 10,000원의 추가비용 발생
                1박 추가 시 해당 객실, 요일별 사용료를 추가 지불
              </span>
            </li>
          </ul>
        </div>
        <div className="detail_item">
          <h2 id="reservation">예약 안내</h2>
          <ul className="reservation_info">
            <li>예약신청 후 모바일티켓을 문자메세지로 보내드립니다.</li>
            <li>
              모바일티켓 예약 폼을 작성해주시면 담당자가 확인 후 연락드립니다.
            </li>
            <li>
              제휴상품의 규정이 변동 될 수 있으므로 전화상담(인원, 날짜 등) 후
              예약이 확정됩니다.
            </li>
            <li>
              전화문의 후 예약가능여부를 체크한 다음 2~3일내 예약확정문자를
              보내드립니다.
            </li>
            <li>
              추가 비용이 발생할 시 비용 지불이 완료한 경우 예약이 확정됩니다.
            </li>
            <li>
              예약 문의 후 답변이 없거나 입금 후 재문의가 없을 시 예약확정이
              불가하므로 문의 바랍니다.
            </li>
          </ul>
        </div>
        <div className="detail_item">
          <h2 id="inquiry">문의사항</h2>
          <img src="/images/service/service_detail_inquiry.png" />
        </div>
        {/* <RecommendService user={user} pdKind="shop" /> */}
      </div>
    </div>
  );
};
