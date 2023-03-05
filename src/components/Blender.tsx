import React from 'react'
import { blender_list } from './Item'
import ItemList from './ItemList'

const Blender = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        illustrator
      </div>
      <ItemList items={blender_list}/>
    </div>
  )
}

export default Blender
