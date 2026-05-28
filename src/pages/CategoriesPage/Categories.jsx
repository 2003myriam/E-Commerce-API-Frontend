import React, { useEffect, useState } from 'react'
import "./Categories.css"
import axios from 'axios'
function Categories() {
   const [error,setError]=useState("")
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
}, [])

  return (
  <div className='category'>
    
    <div className='parent'>
      {categories.map((categorie) => (
        <div key={categorie._id} className="card">
          <img src={categorie.image} alt={categorie.name} />

          <h2>{categorie.name}</h2>
         
        </div>
      ))}
    </div>

    <p id="error-message">{error}</p>

  </div>
)
}
export default Categories
  