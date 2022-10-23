import React from 'react'

import SortingCard from '../../cards/SortingCard'
import PrimeCard from '../../cards/primeCard'

export default function Home() {
  return (
    <div>
       <h1 className="text">ALGORITHM VISUALIZER</h1>
        <h4 className="text1">Visualize Algoritm For Better Understanding</h4>

        <SortingCard/>
        <PrimeCard/>
    </div>
  )
}
