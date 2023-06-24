import React, { useEffect, useState } from 'react'

const UseWindowSize = () => {

    const [size, setSize] = useState(0)

    useEffect(() => {
        const width = window.innerWidth
        setSize(width)

        const handleSize = () => {
            const width = window.innerWidth
            setSize(width)
        }

        window.addEventListener("resize", handleSize)

        return () => window.removeEventListener("resize",handleSize)
    }, [])

    return (
        <>
            <h2>Window Size: {size}px</h2>
        </>
    )
}

export default UseWindowSize