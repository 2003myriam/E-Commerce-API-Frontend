import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import "./Shop.css"

function Shop() {
 const [error, setError] = useState("")
   const [products, setProducts] = useState([])
   const [category, setCategory] = useState("");     // sélection utilisateur
     const [categories, setCategories] = useState([]); // liste API
 

   /* ================= */
   /* ========Getting all products===== */
   /* ======================= */
   const gettingproducts = async () => {
     try {
       const response = await axios.get("http://localhost:5001/Products/product")
 
       setProducts(response.data.getALLproduct)
       setError("")
 
     } catch (error) {
       setError(error.response?.data?.message || "Server error")
     }
   }
 /* ======================== */
  /* ___Affichage category___ */
  /* ======================= */
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/Categories/category",
      );

      setCategories(response.data.getALLcategories);
    } catch (error) {
      console.log(error.response);
    }
  };
   useEffect(() => {
     gettingproducts()
      getCategories();
   }, [])
 
   return (
 
     <div className="shop-container">

  <div className="shop-header">
    <h2 className="shop-title">All Products</h2>
    <p className="shop-subtitle">
      Browse thousands of products and find exactly what you need.
    </p>
  </div>

  <div className="shop-filters">
    <input
      type="text"
      placeholder="Search your product"
      className="search-input"
    />

    <select
      onChange={(e) => setCategory(e.target.value)}
      className="select-categoryy"
    >
      <option value="">Select Category</option>

      {categories.map((cat) => (
        <option key={cat._id} value={cat._id}>
          {cat.name}
        </option>
      ))}
    </select>
  </div>

  <div className="products-grid">
    {products.map((product) => (
      <div key={product._id} className="product-card">

        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />


          <button className="cart-btn">
            <FaCartShopping />
          </button>
        </div>

        <h5 className="product-price">{product.price} DA</h5>
        <h3 className="product-name">{product.title}</h3>


      </div>
    ))}
  </div>

  <p className="error-message">{error}</p>

</div>
   )
}

export default Shop
