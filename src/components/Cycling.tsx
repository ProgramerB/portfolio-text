import React from 'react'
import ItemList from './ItemList'
import {photoshop_list} from './Item'
const Cycling = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        Cycling
      </div>
      <hr />
      <ItemList items={photoshop_list}/>
    </div>
  )
}

export default Cycling
