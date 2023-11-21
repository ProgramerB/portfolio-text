import React from 'react'
import { art_list } from './Item'
import ItemList from './ItemList'

const Tech = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        Tech stuff
      </div>
      <hr />
      <ItemList items={art_list} />
    </div>
  )
}

export default Tech
