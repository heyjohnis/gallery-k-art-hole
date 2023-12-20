import React from 'react';

export const CompleteTitle = ({
  iconUrl,
  title,
  text,
}) => {
  return (
    <article className='complete_title'>
      <img src={iconUrl}/>
      <h2>{title}</h2>
      <span>{text}</span>
    </article>
  )
}
