import React from "react";
import Link from "next/link";
import Table from "react-bootstrap/Table";

const MembershipBenefits = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title membership-tit">
            <span>그린갤러리 골프멤버십 소개</span>
            <h2>멤버십 상품 안내</h2>
          </div>

          <div className="member-table-wrap table_pc">
            <h3>상품 유형1</h3>

            <Table bordered className="table_membership mb-50">
              <thead>
                <tr>
                  <th colSpan={2}>상품</th>
                  <th>미술품</th>
                  <th>보증금</th>
                  <th>이용 방법</th>
                  <th>
                    골프혜택
                    <br />
                    <span className="smaller">(소멸금기준)</span>
                  </th>
                  <th>
                    주중 이용가능 혜택
                    <br />
                    <span className="smaller">(주말이용 시 1.5회 차감)</span>
                  </th>
                  <th>
                    그린피 지원금
                    <br />
                    <span className="smaller">(주중이용시 1.5배 감소)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="sub_th">블랙(5억)</th>
                  <td>개인/법인</td>
                  <td>50%</td>
                  <td>50%</td>
                  <td>무기명 1인</td>
                  <td>100%</td>
                  <td>최대 월 7회(연 83회)</td>
                  <td rowSpan={2}>회당 75% 또는 최대 90만원</td>
                </tr>
                <tr>
                  <th className="sub_th">플래티넘(10억)</th>
                  <td>개인/법인</td>
                  <td>50%</td>
                  <td>50%</td>
                  <td>무기명 1인</td>
                  <td>100%</td>
                  <td>주중 최대 월 14회(연 167회)</td>
                </tr>
              </tbody>
            </Table>

            <h3>상품 유형2</h3>
            <Table bordered className="table_membership mb-50">
              <thead>
                <tr>
                  <th colSpan={2}>
                    상품 <span className="smaller">(VAT)</span>
                  </th>
                  <th>미술품</th>
                  <th>보증금</th>
                  <th>이용 방법</th>
                  <th>
                    골프혜택
                    <br />
                    <span className="smaller">(소멸금기준)</span>
                  </th>
                  <th>
                    주중 이용가능 혜택
                    <br />
                    <span className="smaller">(주말이용 시 1.5회 차감)</span>
                  </th>
                  <th>
                    그린피 지원금
                    <br />
                    <span className="smaller">(주중이용시 1.5배 감소)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan={2} className="sub_th">
                    그린
                    <br />
                    <span className="smaller">(3,500만원)</span>
                  </th>
                  <td rowSpan={2}>개인 전용</td>
                  <td rowSpan={2}>30%</td>
                  <td>0%</td>
                  <td>기명 1인</td>
                  <td>130%</td>
                  <td>최대 월 3회(연 23회)</td>
                  <td rowSpan={2}>회당 50% 또는 최대 60만원</td>
                </tr>
                <tr>
                  <td>25%</td>
                  <td>기명 1인</td>
                  <td>130%</td>
                  <td>최대 월 2회(연 17회)</td>
                </tr>

                <tr>
                  <th rowSpan={2} className="sub_th">
                    블루
                    <br />
                    <span className="smaller">(6,500만원)</span>
                  </th>
                  <td rowSpan={2}>개인 전용</td>
                  <td rowSpan={2}>30%</td>
                  <td>0%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 4회(연 42회)</td>
                  <td rowSpan={2}>회당 50% 또는 최대 60만원</td>
                </tr>
                <tr>
                  <td>25%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 3회(연 32회)</td>
                </tr>

                <tr>
                  <th rowSpan={4} className="sub_th">
                    레드
                    <br />
                    <span className="smaller">(1억)</span>
                  </th>
                  <td rowSpan={4}>개인/법인</td>
                  <td rowSpan={4}>30%</td>
                  <td>0%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 6회(연 65회)</td>
                  <td rowSpan={4}>회당 50% 또는 최대 60만원</td>
                </tr>
                <tr>
                  <td>25%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 5회(연 49회)</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 4회(연 33회)</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>무기명 1인</td>
                  <td>110%</td>
                  <td>최대 월 4회(연 28회)</td>
                </tr>

                <tr>
                  <th rowSpan={4} className="sub_th">
                    퍼플
                    <br />
                    <span className="smaller">(3억)</span>
                  </th>
                  <td rowSpan={4}>개인/법인</td>
                  <td rowSpan={4}>30%</td>
                  <td>0%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 11회(연 130회)</td>
                  <td rowSpan={4}>회당 75% 또는 최대 90만원</td>
                </tr>
                <tr>
                  <td>25%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 9회(연 98회)</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>기명 2인</td>
                  <td>130%</td>
                  <td>최대 월 6회(연 65회)</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>무기명 1인</td>
                  <td>110%</td>
                  <td>최대 월 5회(연 55회)</td>
                </tr>
              </tbody>
            </Table>

            <Table bordered className="table_membership mb-50">
              <thead>
                <tr>
                  <th>부가 혜택</th>
                  <th>특별 혜택</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>
                    프리미엄 레저 + 쇼핑몰 + 럭셔리 여행 + 기타
                  </td>
                  <td>1. 멤버십 가입 시 고급 캐디백, 보스턴백 등 증정</td>
                </tr>
                <tr>
                  <td>2. 유명 프로 골퍼와의 동반 라운드</td>
                </tr>
                <tr>
                  <td>3. VIP의 성공스토리 콘텐츠 제작</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="list_membership table_mb mb-50">
            <h3>상품 유형 1</h3>
            <h4 className="black">블랙 (5억) - 개인/법인</h4>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>50%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">보증금 : </span>50%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>무기명 1인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>100%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 7회(연 83회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 75% 또는 최대 90만원</span>
              </li>
            </ul>

            <h4 className="gray">플래티넘 (10억) - 개인/법인</h4>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>50%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">보증금 : </span>50%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>무기명 1인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>100%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">주중 최대 월 14회(연 167회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 75% 또는 최대 90만원</span>
              </li>
            </ul>

            <h3 className="mt-50">상품 유형 2</h3>
            <h4 className="green">그린 (3,500만원) - 개인 전용</h4>
            <h3 className="tit">보증금 0%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 1인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 3회(연 23회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 25%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 1인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 2회(연 17회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h4 className="blue">블루 (6,500만원) - 개인 전용</h4>
            <h3 className="tit">보증금 0%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 4회(연 42회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 25%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 3회(연 32회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h4 className="red">레드 (1억) - 개인/법인</h4>
            <h3 className="tit">보증금 0%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 6회(연 65회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 25%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 5회(연 49회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 50% - 1</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 4회(연 33회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 50% - 2</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>무기명 1인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>110%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 4회(연 28회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 50% 또는 최대 60만원</span>
              </li>
            </ul>

            <h4 className="purple">퍼플 (3억) - 개인/법인</h4>
            <h3 className="tit">보증금 0%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 11회(연 130회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 75% 또는 최대 90만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 25%</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 9회(연 98회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 75% 또는 최대 90만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 50% - 1</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>기명 2인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>130%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 6회(연 65회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 75% 또는 최대 90만원</span>
              </li>
            </ul>

            <h3 className="tit">보증금 50% - 2</h3>
            <ul>
              <li>
                <span className="list_icon"></span>
                <span className="strong">미술품 : </span>30%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">이용 방법 : </span>무기명 1인
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">골프 혜택(소멸금 기준) : </span>110%
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  주중 이용가능 혜택 (주말이용 시 1.5회 차감)
                </span>
                <span className="txt">최대 월 5회(연 55회)</span>
              </li>
              <li>
                <span className="list_icon"></span>
                <span className="strong">
                  그린피 지원금 (주중이용시 1.5배 감소)
                </span>
                <span className="txt">회당 75% 또는 최대 90만원</span>
              </li>
            </ul>

            <Table bordered className="table_membership mt-30">
              <thead>
                <tr>
                  <th>부가 혜택</th>
                  <th>특별 혜택</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>
                    프리미엄 레저 + 쇼핑몰 + 럭셔리 여행 + 기타
                  </td>
                  <td>1. 멤버십 가입 시 고급 캐디백, 보스턴백 등 증정</td>
                </tr>
                <tr>
                  <td>2. 유명 프로 골퍼와의 동반 라운드</td>
                </tr>
                <tr>
                  <td>3. VIP의 성공스토리 콘텐츠 제작</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipBenefits;
