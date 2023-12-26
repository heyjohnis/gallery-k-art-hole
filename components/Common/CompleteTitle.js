import React from 'react';

export const CompleteTitle = ({
  iconUrl,
  title,
  title2,
  text,
}) => {
  return (
    <article className='complete_title'>
      <img src={iconUrl}/>
      <h2>{title}<span>{title2}</span></h2>
      <p>{text}</p>
    </article>
  )
}
