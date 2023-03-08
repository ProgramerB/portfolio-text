import React from 'react'
import { photo_list } from './Item'
import ItemList from './ItemList'
const Photography = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        photography
      </div>
      <ItemList items={photo_list} />
    </div>
  )
}

export default Photography
