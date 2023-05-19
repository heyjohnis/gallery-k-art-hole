import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import styles from "../Mypage.module.scss";
import Table from 'react-bootstrap/Table';
import baseUrl from "../../../utils/baseUrl";
import { commaFormat, hyphenForPhone, hyphenForCorpNum } from "../../../utils/number";


const Contract = ({ user }) => {

    const [loading, setLoading] = useState(false);
    const [artworks, setArtworks] = useState([]);

    const corpSsn = user.corp_ssn || '';
    
    useEffect(() => {
        setLoading(true);
        if(user.cntc_no) {
            const url = `${baseUrl}/mypage/artwork`;
            const medq_token = cookie.get("medq_token");
            console.log("user.cntc_no: ", user.cntc_no);
            axios({ method: "post", url: url, headers: { Authorization: `Bearer ${medq_token}` }, data: {cntc_no: user.cntc_no} })
                .then(({ data }) => {
                    console.log("artworks: ", data);
                    setArtworks(data);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user]);


    return (
        <section>
            <div className={`container ${styles.benefit_info}`}>
                <h3>{user.ms_name} 혜택</h3>
                <Table bordered className={styles.table_membership}>
                    <thead>
                    <tr>
                        <th>상품</th>
                        <th>미술품</th>
                        <th>보증금</th>
                        <th>이용 방법</th>
                        <th>주중 이용가능 혜택<br/><span className="smaller">(주말이용 시 1.5회 차감)</span></th>
                        <th>그린피 지원금<br/><span className="smaller">(주중이용시 1.5배 감소)</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="sub_th">{user.ms_name}</th>
                        <td>{user.artwork}%</td>
                        <td>{user.deposit}%</td>
                        <td>{user.user_option === '01' ? '기명 1인' : user.user_option === '02' ? '기명 2인' : '무기명 1인'}</td>
                        <td>최대 월 {user.monthly_count}회(연 {user.yearly_count}회)</td>
                        <td>회당 50% 또는 최대 60만원</td>
                    </tr>
                    </tbody>
                </Table>

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
                            <td>{hyphenForPhone(user.mobile || '')} {user.phone ? `(${hyphenForPhone(user.phone)})`: ''}</td>
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
                            <th>이용기간</th>
                            <td>{user.start_date} ~ {user.end_date}</td>
                        </tr>
                        { user.special_contract && <tr>
                            <th>특약사항</th>
                            <td>{user.special_contract}</td>
                        </tr> }

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
                                <th>사업자명</th>
                                <td>{user.corp_name}</td>
                            </tr>
                            <tr>
                                <th>사업자번호</th>
                                <td>{hyphenForCorpNum(user.corp_ssn || '')}
                                </td>
                            </tr>
                            </>
                        }
                    </tbody>
                </Table>

                { artworks.length > 0 &&
                <>
                <h3>보유작품</h3>
                <Table bordered className={styles.table_membership}>
                    <thead>
                        <tr>
                        <th colSpan={2}>작품정보</th>
                        <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artworks.map( (artwork, i) => 
                        <tr key={i}>
                        <td><img src={`https://www.artnomics.co.kr/data/artworks/${artwork.atwk_no}/thumb-image_100.jpg`} /></td>
                        <td>{artwork.atwk_nm} 
                            / {artwork.atst_nm} 
                            / {artwork.atwk_resc} 
                            / {artwork.atwk_size_no}호 
                            / {artwork.atwk_make_year}년</td>
                        <td>{commaFormat(artwork.price || 0)}원</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
                </>
                }
            </div>
        </section>
    );
};

export default Contract;