import React, { useState } from 'react'

export default function FruitCounter(props) {

    const [count, setCount] = useState(0)

    const [fruit, setFruit] = useState(props.chrisFavoriteFruit)

    function increment() {
        setCount(count + 1)
        changeFruit(count)
    }

    function decrement() {
        setCount(count - 1)
        changeFruit(count)
    }

    

    function changeFruit(count) {
        // if count is less than 0 then render BROKE!
        if (count < 0) {
            setFruit("BROKE!")
            alert("BROKE!")
            return
        }

        switch (count) {
            case 0:
                setFruit("apple")
                break;
            case 1:
                setFruit("banana")
                break;
            case 2:
                setFruit("orange")
                break;
            case 3:
                setFruit("kiwi")
                break;
            case 4:
                setFruit("mango")
                break;
            case 5:
                setFruit("pineapple")
                break;
        }
    }

    return (
        <div className='fruit-container'>
            <h1>Favorite Fruit</h1>
            <p>{fruit}</p>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}
