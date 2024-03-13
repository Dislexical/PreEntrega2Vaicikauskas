import { useState } from "react" 

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] =useState(initial)

    const decrement = () => {
        if(count > 1){
            setCount(prev => prev -1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }
    return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onclick={() => onAdd(count)}>agregar al carro</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount