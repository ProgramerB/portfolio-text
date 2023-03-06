import React from 'react'
import { work_list } from './Item'
import ItemList from './ItemList'

const Work = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        work
      </div>
      <ItemList items={work_list} />
    </div>
  )
}

export default Work
