import React from 'react'

const Product = React.memo(({name, addToCartFunction}) => {
  console.log(`${name} is Re-rendering`)
  return (
    <div className='border inline-block m1'>
        <h1>{name}</h1>
        <button onClick={()=>addToCartFunction()}>Add to Cart</button>
    </div>
  )
})

export default Product