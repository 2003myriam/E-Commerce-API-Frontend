import React, { useEffect, useState } from 'react'
import "./Categories.css"
import axios from 'axios'

function Categories() {

  const [error, setError] = useState("")
  const [categories, setCategories] = useState([])

  const gettingcategories = async () => {
    try {
      const response = await axios.get("http://localhost:5001/Categories/category")

      setCategories(response.data.getALLcategories)
      setError("")

    } catch (error) {
      setError(error.response?.data?.message || "Server error")
    }
  }

  useEffect(() => {
    gettingcategories()
  }, [])

  return (

    <div className='sectionCategoryContainer'>

      <div className='sectionCategoryHeader'>
        <h2>Categories</h2>
        <p>Explore every collection in our marketplace.</p>
      </div>

      <div className='sectionCategoryGrid'>

        {categories.map((categorie) => (

          <div
            key={categorie._id}
            className="sectionCategoryCard"
          >

            <img
              src={categorie.image}
              alt={categorie.name}
              className='sectionCategoryImage'
            />

            <div className='sectionCategoryOverlay'></div>

            <h2 className='sectionCategoryTitle'>
              {categorie.name}
            </h2>

          </div>

        ))}

      </div>

      <p className="sectionCategoryError">
        {error}
      </p>

    </div>
  )
}

export default Categories