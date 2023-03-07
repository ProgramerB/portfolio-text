// import React, { useEffect, useState } from 'react'
import { Item } from './Item'

const ItemRenderer = (item:Item) => {
  // const [color,setColor] = useState("black")
  // function changeColor(){
  //   setColor("white")
  // }
  
  return (
    <div id={item.id} className='item-head'>
      {item.name}
    </div>
  )
}

export default ItemRenderer
