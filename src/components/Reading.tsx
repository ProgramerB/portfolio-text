import React from 'react'
import { illustrator_list } from './Item'
import ItemList from './ItemList'

const Reading = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        Reading
      </div>
      <hr />
      <ItemList items={illustrator_list}/>
    </div>
  )
}

export default Reading
