import React from "react";
import { Form } from "react-bootstrap";

export function GgTourFilter({ form, setForm, keywords }) {
  const handleCheckKeyword = (e) => {
    const { checked, value } = e.target;
    const arr = form?.keywords ? form?.keywords?.split(",") : [];
    let keywords = "";
    if (checked) {
      arr.push(e.target.value);
      const set = new Set(arr);
      keywords = Array.from(set).join(",");
    } else {
      const index = arr.indexOf(value);
      arr.splice(index, 1);
      keywords = arr.join(",");
    }
    setForm((prev) => ({ ...prev, keywords }));
  };

  return (
    <>
      <section>
        <h2>카테고리</h2>
        <div className="filter_group">
          {keywords.map((keyword, index) => (
            <Form.Check
              label={keyword}
              name={`brand${index + 1}`}
              type="checkbox"
              value={keyword}
              className="item"
              onChange={handleCheckKeyword}
            />
          ))}
        </div>
      </section>
    </>
  );
}
