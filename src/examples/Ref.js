import React, { useState, useRef } from 'react'

const Ref = () => {
    const [name, setName] = useState('')
    const [names, setNames] = useState([])
    const inputRef = useRef()

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleAddName = () => {
        if (!name) { return }
        setNames(currentNames => [...currentNames, name])
        setName('') // Para limpar o input
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} value={name} onChange={handleInputChange} placeholder="Name" />
            <button onClick={handleAddName}>Add Name</button>
            <ul>
                {names.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

        </div>
    )
}

export default Ref
