import React from 'react'
import { video_list } from './Item'
import ItemList from './ItemList'

const VideoEdits = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        video edits
      </div>
      <hr />
      <ItemList items={video_list} />
    </div>
  )
}

export default VideoEdits
