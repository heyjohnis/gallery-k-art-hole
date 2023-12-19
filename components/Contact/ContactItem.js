import React from 'react';
import styles from "./Contact.module.scss"

export const ContactItem = ({
  itemNumber,
  itemTitle,
  itemText,
}) => {
  return (
    <div className={`contack_item col-lg-3 col-sm-6 ${styles.item_card}`}>
      <article>
        <h1>{itemNumber}</h1>
        <h2>{itemTitle}</h2>
        <p>{itemText}</p>
      </article>
    </div>
  )
}
