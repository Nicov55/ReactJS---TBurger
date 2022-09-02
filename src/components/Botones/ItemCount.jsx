import React, { useEffect, useState } from 'react'

const ItemCount = ({inicial, stock, onAdd}) => {

const [count,setCount] = useState(parseInt(inicial));

const decremento = () => {
    setCount(count - 1);
}

const aumento = () => {
    setCount(count + 1);
}

useEffect (() => {
    setCount(parseInt(inicial));
}, [inicial])

  return (
    <div className='counter card-footer p-4 pt-0 border-top-0 bg-transparent'>
        <button className="btn btn-outline-secondary btn-sm" disabled={count <= 1} onClick={decremento} >-</button>
        <span className='count'>{count}</span>
        <button className="btn btn-outline-secondary btn-sm" disabled={count >= stock} onClick={aumento}>+</button>
        <br />
        <br />
        <div className="text-center"><button disabled={stock <= 0} onClick={() => onAdd(count)} className='btn btn-outline-dark mt-auto pedido'>Agregar al Pedido</button></div>
    </div>
  )
}

export default ItemCount