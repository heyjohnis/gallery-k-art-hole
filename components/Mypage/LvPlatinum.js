/* eslint-disable react/react-in-jsx-scope */
import Table from "react-bootstrap/Table";
import styles from "./Mypage.module.scss";

const platinumData = [
  {
    image: "/images/main/slide_benefit01.png",
    url: "#",
    text: "당신의 행복한 건강",
  }
];

const LvPlatinum = ({ user }) => {
  return (
    <>
      <section>
        <div className={`container ${styles.benefit_info}`}>
          <h3>플래티넘 혜택</h3>
          <Table bordered className={styles.table_membership}>
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
                <th className="sub_th">
                  플래티넘<span className="smaller">(10억)</span>
                </th>
                <td>개인/법인</td>
                <td>50%</td>
                <td>50%</td>
                <td>무기명 1인</td>
                <td>100%</td>
                <td>주중 최대 월 14회(연 167회)</td>
                <td rowSpan={2}>회당 75% 또는 최대 90만원</td>
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

export default LvPlatinum;
