import React, { useState, useEffect } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {     /**Só vai ser disparado quando o count sofrer modificação */
        console.log(count)
    }, [count])

    useEffect(() => {  /*Assim que a tela for carregada, a função é disparada, pois o array de dependencias está vazio. */

        //componentDidMount
        console.log('Montou em tela')

        //componentWillUnmount
        return () => {
            console.log('Desmontou')
        }
    }, [])

    const more = () => {
        setCount(currentCount => currentCount + 1)
    }

    const less = () => {
        setCount(currentCount => currentCount - 1)
    }

    return (
        <>
            <h1 >Count: {count}</h1>
            <button onClick={more}>more</button>
            <button onClick={less}>less</button>
        </>
    )
}

export default Effect
