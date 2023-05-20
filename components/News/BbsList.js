/* eslint-disable react/prop-types */
import React from "react";
import BbsSigleCard from "./BbsSingleCard";
import BbsNoContent from "./BbsNoContent";

const BbsList = ({ contents }) => {
  return (
    <>
      {contents.length > 0 ? (
        <section className="news-area ptb-100">
          <div className="container">
            <div className="row">
              {contents.map((content) => (
                <BbsSigleCard key={content.bbs_no} content={content} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <BbsNoContent />
      )}
    </>
  );
};

export default BbsList;
