import React, { useState } from 'react'
import { Item, ItemProp } from './Item'
import empty from '../images/Empty.png'
import under_construction_img from '../images/Under_Construction_BW.png'

const ItemList = (list:ItemProp) => {
  
  const [desc, setDesc] = useState<String | null>()
  // const [titleColor, setTitleColor] = useState('white');
  const [images,setImages] = useState([{main:empty,side:[empty]},]);

  function changeContent(item:Item){
    setDesc(item.desc)
    // setTitleColor("black")
    setImages(item.images)
    // console.log(images)
  }

  return (
    <>
    <img className='construct-img' src={under_construction_img}/>
      <hr />
      <div className='item-list'>
        {list.items.map((item)=>{
                    return(
                        <div className='item' id={item.id} onClick={()=>{changeContent(item)} }>
                          <div id={item.id} className='item-head'>
                            {item.name}
                          </div>
                        </div>
                    )
            })}
      </div>
      <div className='item-content'>
        <div className='item-desc'>
              {desc}
        </div>
      {images.map((im)=>(
        <div className='item-block'>
          <div className='item-images'>
            <img className='item-main-image' src={im.main} alt="kk"/>
            <div className='item-side-images'>
              {
                im.side.map((img)=>{
                  return(
                    <img className='item-image' src={img} alt="kk"/>
                  )
                })
              }
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default ItemList
