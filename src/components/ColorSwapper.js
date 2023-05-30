import React, { useState } from 'react'

export default function ColorSwapper({ color1, color2 }) {

    const [currentColor, setCurrentColor] = useState(color1)

    const handleClick = () => {
        setCurrentColor(currentColor === color1 ? color2 : color1)
    }

    return (
        <div onClick={handleClick}>
            <h1 style={{ color: currentColor }}>Color Swapper</h1>
        </div>
    )
}
