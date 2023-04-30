import Link from "next/link";
import Table from 'react-bootstrap/Table';
import styles from "./Mypage.module.scss";

const LvBlack = ({ user }) => {
  return (
    <>
      <section>
        <div className={`container ${styles.benefit_info}`}>
          <h3>블랙회원 혜택</h3>
          <Table bordered className="table_membership mb-50">
            <thead>
              <tr>
                <th colSpan={2}>상품</th>
                <th>미술품</th>
                <th>보증금</th>
                <th>이용 방법</th>
                <th>골프혜택<br/><span className="smaller">(소멸금기준)</span></th>
                <th>주중 이용가능 혜택<br/><span className="smaller">(주말이용 시 1.5회 차감)</span></th>
                <th>그린피 지원금<br/><span className="smaller">(주중이용시 1.5배 감소)</span></th>
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
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default LvBlack;
