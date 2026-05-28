import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./AdminAddCategory.css"
 

function AdminAddCategory() {
  const[name,setName]=useState("")
  const[image,setImage]=useState("")
  const[description,setDescription]=useState("")
  const [error,setError]=useState("")
  const [refresh, setRefresh] = useState(false)
  const token = localStorage.getItem("token")
  const handleNameChange = (e) => {
  setName(e.target.value)
}
 const handleImageChange = (e) => {
  setImage(e.target.value)
}
 const handleDescriptionChange = (e) => {
  setDescription(e.target.value)
}
   const addCategory =async () =>{
    try {
      const response =await  axios.post("http://localhost:5001/Categories/Category",{name, image },
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

/* ____getting category____ */
  const [categories, setCategories] = useState([])
   const gettingcategories =async () =>{
    try {
      const response =await  axios.get("http://localhost:5001/Categories/category")
      setError("");
      setCategories(response.data.getALLcategories)
    } catch (error) {
      console.log("Error");
       setError(error.response.data.message|| "Server error")
    }
  }
  /* ___appel de la fonction lors du chargement ______ */
  useEffect(() => {
   gettingcategories()
}, [refresh] )

  return (
    <div  className='admin-container'>
    
    <div className='addCategory'>
       <div className='addCategory_content'>
        <h2> + Add category</h2>
        <input type="text" onChange={handleNameChange} placeholder='Name' />
        <input type="text" onChange={handleImageChange} placeholder='Image URL'/>
        <input type="text" onChange={handleDescriptionChange} placeholder='Description'/>
        <button onClick={addCategory}>Save</button>
         <p id="error-message">{error}</p>
          
       </div>
    <div className='parent1'>
      {categories.map((categorie) => (
        <div key={categorie._id} className="card">
          <img src={categorie.image} alt={categorie.name} />

          <h2>{categorie.name}</h2>
          <p>{categorie.description}</p>
         
        </div>
      ))}
    </div>
   
    </div>
    </div>
   
  )
}

export default AdminAddCategory