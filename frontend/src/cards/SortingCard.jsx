import React from 'react'
import "./card.css"

const SortingCard =()=>{
  return(
    <>
    <div className='SortingCard'>
      <div className='cardImg'>
        <img src="https://embed-ssl.wistia.com/deliveries/70d6f4e10e2badb5ef394f00c17ad2bc1c14f6e7.jpg" alt="" />
      </div>

      <div>
        <p className='cardTitle'>some sorting</p>
        <p className='cardDescriptoin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis adipisci deleniti nesciunt consequatur molestias laboriosam commodi autem illo? Mollitia nostrum voluptatibus doloribus et, odio placeat voluptates fugiat odit dolor sunt!</p>
      </div>
      <button className='cardButton'> View</button>
    </div>
    </>
  )
};

export default SortingCard;
