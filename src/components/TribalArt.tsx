import React from 'react'
import { video_list } from './Item'
import ItemList from './ItemList'

const TribalArt = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        Tribal Art
      </div>
      <hr />
      <ItemList items={video_list} />
    </div>
  )
}

export default TribalArt
