import React, { useEffect, useState } from 'react'

const ProductList = () => {
const [product, setProduct] = useState([])

const getProduct = async() => {
  let result = await fetch('http://localhost:5000/productlist')
  result = await result.json();
  setProduct(result)
}

useEffect(() => {
  getProduct();
},[])


  return (
    <div >
      <h4>Product List</h4>
      <div className='pruductlist'>

      <tr>
        <th>Sr.No </th>
        <th>Name </th>
        <th>Price </th>
        <th>category </th>
        <th>company </th>
      </tr>
    
    {
      product.map((item, index)=> 
        <tr>
          <th>{index+1}</th>
          <th>{item.name}</th>
          <th> $ {item.price}</th>
          <th>{item.category}</th>
          <th>{item.company}</th>
        </tr>
      )

    }
      </div>
    </div>
  )
}

export default ProductList
