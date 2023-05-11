import React from 'react';
import styles from "../Mypage.module.scss";
import Table from 'react-bootstrap/Table';


const Contract = ({ user }) => {
    console.log("user: ", user);

    const corpSsn = user.corp_ssn || '';
    
    return (
        <section>
            <div className={`container ${styles.benefit_info}`}>
                <h3>계약정보</h3>
                <Table bordered className={styles.table_membership}>
                    <tbody>
                        <tr>
                            <th>상품</th>
                            <td>{user.ms_name}</td>
                        </tr>
                        <tr>
                            <th>계약기간</th>
                            <td>5년</td>
                        </tr>
                        <tr>
                            <th>계약자</th>
                            <td>{user.user_name}</td>
                        </tr>
                        <tr>
                            <th>계약자 연락처</th>
                            <td>{user.mobile} {user.phone ? `(${user.phone})`: ''}</td>
                        </tr>
                        <tr>
                            <th>계약자 이메일</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>담당딜러</th>
                            <td>{user.dlr_nm}{user.dlr_cd ? `(${user.dlr_cd})`: ''}</td>
                        </tr>
                        <tr>
                            <th>계약일</th>
                            <td>{user.contract_date}</td>
                        </tr>
                        <tr>
                            <th>계약기간</th>
                            <td>{user.contract_date} ~ {user.end_date}</td>
                        </tr>
                        { user.user_kind != '01' &&
                            <>
                            <tr>
                                <td colSpan={2} className={styles.blankTr}></td>
                            </tr>    
                            <tr>
                                <th>사업자유형</th>
                                <td>{user.corp_type == '01' ? '개인' : '법인'}</td>
                            </tr>
                            <tr>
                                <th>업체명</th>
                                <td>{user.corp_name}</td>
                            </tr>
                            <tr>
                                <th>사업자번호</th>
                                <td>
                                    {
                                        corpSsn.length > 5 ? `${corpSsn.substring(0, 6)}-${corpSsn.substring(6)}`  : ''
                                    }
                                </td>
                            </tr>
                            </>
                        }

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
    );
};

export default Contract;