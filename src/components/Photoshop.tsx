import React from 'react'
import ItemList from './ItemList'
import {photoshop_list} from './Item'
const Photoshop = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        photoshop
      </div>
      <hr />
      <ItemList items={photoshop_list}/>
    </div>
  )
}

export default Photoshop
