import React from "react";

export const ProductDetailContent = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content?.info_contents,
      }}
    ></div>
  );
};
