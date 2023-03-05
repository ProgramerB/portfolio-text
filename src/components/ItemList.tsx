import React, { useState } from 'react'
import { Item, ItemProp } from './Item'
import ItemRenderer from './ItemRenderer'


const ItemList = (list:ItemProp) => {
  const [desc, setDesc] = useState<String | null>("brn")
  // const [titleColor, setTitleColor] = useState('white');
  const [images,setImages] = useState("d");
  function changeContent(item:Item){
    setDesc(item.desc)
    // setTitleColor("black")
    setImages(item.images[0])
  }

  return (
    <div>
      <div className='item-list'>
        {list.items.map((item)=>{
                    return(
                        <div className='item' id={item.id} onClick={()=>{changeContent(item)} }>
                          <ItemRenderer id={item.id} name ={item.name} images={item.images} desc={item.desc} />
                        </div>
                    )
            })}
      </div>
      <div className='item-content'>
        <div className='item-desc'>
          {desc}
        </div>
        <div className='item-images'>
            <img className='image' src={images} alt="kk"/>
        </div>
      </div>
    </div>
  )
}

export default ItemList
