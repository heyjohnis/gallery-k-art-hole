import React from 'react';
import Link from 'next/link';

const BbsSingleCard = ({ content }) => {
    console.log(" {...content} : ",  {...content});
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-news">
            <div className="blog-img">
                <Link href={`/bbs/detail/${content.bbs_no}`}>
                <img src={content.thumb_img} alt="뉴스썸네일" />
                </Link>
            </div>

            <div className="news-content-wrap">
                <ul>
                <li>
                    {(content.reg_date || '0000-00-00').substring(0, 10)}
                </li>
                </ul>

                <Link href={`/bbs/detail/${content.bbs_no}`} className="news-tit">
                <h3>{content.title}</h3>
                </Link>

                <p>
                    {(content.content || '').replace(/<[^>]*>?/g, '')}
                </p>

                <Link href={`/bbs/detail/${content.bbs_no}`} className="read-more">
                자세히 보기 <i className="bx bx-plus"></i>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default BbsSingleCard;