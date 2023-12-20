import React from 'react'

export const CompleteContents = (props) => {
  return (
    <tr>
      <td>{props.item}</td>
      <td>{props.info}</td>
    </tr>
  )
}
