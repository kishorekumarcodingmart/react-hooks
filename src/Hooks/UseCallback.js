import React, { useCallback, useState } from 'react'
import Product from '../Components/Product'

function UseCallback() {

    const [count, setCount] = useState(0)

    const [cart, setCart] = useState(0)

    const [productList] = useState(["Product 1","Product 2","Product 3"])

    const addToCartFunction = useCallback(() => {
        setCart(cart + 1)
    },[cart])

  return (
    <div>
        <h1>useCallback</h1>

        <h4>Count : {count}</h4>
        <button onClick={()=>setCount(prev => prev + 1)}>Increment</button>

        <h4>Cart : {cart}</h4>


        {
            productList.map((val,index)=>{
                return (
                    <Product name={val} key={index} addToCartFunction={addToCartFunction}/>
                )
            })
        }
    </div>
  )
}

export default UseCallback