import React from 'react'
import { blender_list } from './Item'
import ItemList from './ItemList'

const Gaming = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        Gaming
      </div>
      <hr />
      <ItemList items={blender_list}/>
    </div>
  )
}

export default Gaming
