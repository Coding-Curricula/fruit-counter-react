import React from 'react'

import FruitCounter from './components/FruitCounter'
import ColorSwapper from './components/ColorSwapper'

import './App.css'

export default function App() {
    return (
        <div className='App'>
            <div className='App-container'>
            <FruitCounter chrisFavoriteFruit="apple" />
            <ColorSwapper color1="black" color2="rebeccaPurple" />
            </div>
        </div>
    )
}
