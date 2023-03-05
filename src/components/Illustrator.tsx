import React from 'react'
import { illustrator_list } from './Item'
import ItemList from './ItemList'

const Illustrator = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        illustrator
      </div>
      <ItemList items={illustrator_list}/>
    </div>
  )
}

export default Illustrator
