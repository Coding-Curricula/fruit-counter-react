import React, { useState } from 'react'

export default function FruitCounter(props) {
    console.log("chris' favorite fruit", props)
    return (
        <div>
            <p>My favorite fruit is: {props.favoriteFruit}</p>
        </div>
    )
}
