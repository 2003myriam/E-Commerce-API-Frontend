import React, { useEffect, useState } from 'react'
import "./AdminAddCategory.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function AdminAddProduct() {
   const[title,setTitle]=useState("")
    const[image,setImage]=useState("")
    const[description,setDescription]=useState("")
    const[stock,setStock]=useState("")
    const[price,setPrice]=useState("")
    const [error,setError]=useState("")
    const [refresh, setRefresh] = useState(false)
    const token = localStorage.getItem("token")
    const handleNameChange = (e) => {
  setTitle(e.target.value)
  }
 const handleImageChange = (e) => {
  setImage(e.target.value)
}
 const handleDescriptionChange = (e) => {
  setDescription(e.target.value)
}
 const handlePriceChange = (e) => {
  setPrice(e.target.value)
}
const handleStockChange = (e) => {
  setStock(e.target.value)
}
const addProduct =async () =>{
    try {
      const response =await  axios.post("http://localhost:5001/Products/product",{title, image , price,stock},
         {
  headers: {
    Authorization: `Bearer ${token}`
  }
}
      )
      setRefresh(!refresh)
      navigate("/");
      setError("");
    } catch (error) {
      console.log("Error");
       setError(error.response.data.message|| "Server error")
    }
  }
   /* ____getting Product____ */
   const [products, setProducts] = useState([])
   const gettinproducts =async () =>{
    try {
      const response =await  axios.get("http://localhost:5001/Products/product")
      setError("");
      setProducts(response.data.getALLproduct)
    } catch (error) {
      console.log("Error");
       setError(error.response.data.message|| "Server error")
    }
  }
  /* ___appel de la fonction lors du chargement ______ */
  useEffect(() => {
   gettinproducts()
}, [refresh] )
  return (
     <>
     <div  className='admin-container'>
     <div className='addCategory'>
       <div className='addCategory_content'>
        <h2> + Add Product</h2>
        <input type="text" onChange={handleNameChange} placeholder='Name' />
        <input type="text" onChange={handleImageChange} placeholder='Image URL'/>
        <input type="text" onChange={handleDescriptionChange} 
        placeholder='Description'/>
         <input type="Number" onChange={handlePriceChange} 
        placeholder='Price'/>
        <input type="Number" onChange={handleStockChange} 
        placeholder='Stock'/>
        <button onClick={addProduct}>Save</button>
         <p id="error-message">{error}</p>
       </div>
        <div className='parent1'>
      {products.map((product) => (
        <div key={ product._id} className="card">
          <img src={product.image} alt={product.title} />

          <h2>{product.title}</h2>
          <p>{product.description}</p>
         
        </div>
      ))}
    </div>
    </div>
    </div>
     </>
  )
}

export default AdminAddProduct
