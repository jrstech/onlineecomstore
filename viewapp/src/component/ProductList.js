import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'reactstrap'

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

const deleteProduct = async (id) => {
let result = await fetch(`http://localhost:5000/product/${id}`,{
  method: 'delete'
})
result =  await result.json()
if(result){
  getProduct();
}
}
const searchHandle = async (e) => {
  let key = e.target.value;
  if(key){
    let results = await fetch(`http://localhost:5000/search/${key}`);
  results = await results.json();
  if(results){
   setProduct(results)
  }
  }else{
    getProduct();
  }
 }
 
  return (
    <div >
        
      <h4>Product List</h4>
      <Input className="w-25 mx-5 m-3" type="text" placeholder="Search Product" 
          onChange={searchHandle}/>
      <div className='pruductlist'>

      <tr>
        <th>Sr.No </th>
        <th>Name </th>
        <th>Price </th>
        <th>category </th>
        <th>company </th>
       <th>Action</th> 
      </tr>
    
    {
      product.length>0?product.map((item, index)=> 
        <tr key={item._id}>
          <th>{index+1}</th>
          <th>{item.name}</th>
          <th> $ {item.price}</th>
          <th>{item.category}</th>
          <th>{item.company}</th>
          <th><Button color='danger' className='mx-2' onClick={()=>deleteProduct(item._id)}>Delete</Button>
          <Link to={"/update/"+item._id} className='navlinkupdate'>Update</Link></th>
        </tr>
      )
:
    <h4 className='m-4'>No result Found</h4>
    }
      </div>
    </div>
  )
}

export default ProductList
