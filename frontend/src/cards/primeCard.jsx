import React from 'react'
import "./card.css"

import {Link} from "react-router-dom"

const PrimeCard = () => {
  return (
    <>
    <div className='PrimeCard'>
      <div className='cardImg'>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/SieveofEratosthenes5.jpg" alt="" />
      </div>

      <div>
        <p className='cardTitle'>Sieve of Eratosthenes</p>
        <p className='cardDescriptoin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis adipisci deleniti nesciunt consequatur molestias laboriosam commodi autem illo? Mollitia nostrum voluptatibus doloribus et, odio placeat voluptates fugiat odit dolor sunt!</p>
      </div>
      <Link to = "/visualize-prime"><button className='cardButton'> Visualize </button></Link>
    </div>
    </>
  )
};

export default PrimeCard;