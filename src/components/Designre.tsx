import React from 'react'
import { design_list } from './Item'
import ItemList from './ItemList'

const Designre = () => {
  return (
    <div className='App-Content'>
      <div className='title'>
        design research
      </div>
      <ItemList items={design_list} />
    </div>
  )
}

export default Designre
