import React from 'react'

import FruitCounter from './components/FruitCounter'

import './App.css'

export default function App() {
    return (
        <div className='App'>
            <div className='App-container'>
            <FruitCounter chrisFavoriteFruit="apple" />
            </div>
        </div>
    )
}
