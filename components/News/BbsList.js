import React from "react";
import Link from "next/link";
import BbsSigleCard from './BbsSingleCard';

const BbsList = ({contents}) => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row">
            {
              contents.map( content => 
                <BbsSigleCard key={content.bbs_no} content={content} />  
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default BbsList;
