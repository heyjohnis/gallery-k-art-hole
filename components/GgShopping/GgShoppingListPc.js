import React from 'react'
import { Form } from 'react-bootstrap'
import GgShoppingFilter from './GgShoppingFilter'
import GgshoppingListItems from './GgshoppingListItems'

export default function GgShoppingListPc() {
  return (
    <>      
      <div className='shopping_tit'>
        <div>
          <h1>GG 쇼핑</h1>
          <span>{`GG Mall > GG 쇼핑`}</span>
        </div>
        <div>
          <Form.Control
            type="text"
            placeholder="Search"
            className='shopping_search'
          />
        </div>
      </div>
      <div className='row'>

        <div className='col-lg-2'>
          <GgShoppingFilter/>
        </div>
        <div className='col-lg-10'>
          <GgshoppingListItems/>
        </div>
      </div>
    </>
  )
}

