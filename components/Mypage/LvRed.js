/* eslint-disable react/react-in-jsx-scope */
import Table from "react-bootstrap/Table";
import styles from "./Mypage.module.scss";

const LvRed = () => {
  return (
    <>
      <section>
        <div className={`container ${styles.benefit_info}`}>
          <h3>그린 혜택</h3>
          <Table bordered className={styles.table_membership}>
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
          <Table bordered className={styles.table_membership}>
            <thead>
              <tr>
                <th>부가 혜택</th>
                <th>특별 혜택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>프리미엄 레저 + 쇼핑몰 + 럭셔리 여행 + 기타</td>
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
      </section>
    </>
  );
};

export default LvRed;
