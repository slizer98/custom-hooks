import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    const handleCounter = (e) => {
        if(e.key === 'Enter' && e.target.value !== '') {
            e.preventDefault()
            setCounter(e.target.value)
        }
    }

    const increment = ( value = 1 ) => {
        setCounter(counter + value)
    }

    const decrement = ( value = 1 ) => {
        if(counter === 0) return;
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    
    return{
        counter,   
        handleCounter,  
        increment,
        decrement,
        reset
    }
} 