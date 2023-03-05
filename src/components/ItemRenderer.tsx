import React from 'react'
import { Item } from './Item'

const ItemRenderer = (item:Item) => {
  return (
    <div className='item-head'>
      {item.name}
    </div>
  )
}

export default ItemRenderer
