import React from 'react'
import './ItemList.css'

export default function ItemList() {
  return (
    <div>
      <div className='item-list'>
        <Slider {...facilitiesSettings}>
          <div className='item'>
            <div className='item-content'></div>
          </div>
          <div className='item'>
            <div className='item-content'></div>
          </div>
          <div className='item'>
            <div className='item-content'></div>
          </div>
          <div className='item'>
            <div className='item-content'></div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
