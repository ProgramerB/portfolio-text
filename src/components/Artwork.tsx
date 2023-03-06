import React from 'react'
import { art_list } from './Item'
import ItemList from './ItemList'

const Artwork = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        art work
      </div>
      <ItemList items={art_list} />
    </div>
  )
}

export default Artwork
