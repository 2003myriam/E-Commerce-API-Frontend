import React, { useEffect, useState } from "react";
import "./AdminAddCategory.css";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import "./AdminAddProduct.css";
import { GrUpdate } from "react-icons/gr";
function AdminAddProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");     // sélection utilisateur
  const [categories, setCategories] = useState([]); // liste API
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("token");


  const handleNameChange = (e) => {
    setTitle(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleStockChange = (e) => {
    setStock(e.target.value);
  };
  /* ======================= */
  /* ======ADD Product========== */
  /* ===================== */
  const addProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/Products/product",
        { title, image, price, stock ,description,  CategoryId: category},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setRefresh(!refresh);
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message || "Server error");
    }
  };
  /* ============================ */
  /* ____getting Product____ */
  /* ======================= */
  const [products, setProducts] = useState([]);
  const gettinproducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/Products/product",
      );
      setError("");
      setProducts(response.data.getALLproduct);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message || "Server error");
    }
  };
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
  /* ___appel de la fonction lors du chargement ______ */
  useEffect(() => {
    gettinproducts();
    getCategories();
  }, [refresh]);

  /* ================================ */
  /* ______delete product__________ */
  /* =============================== */
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/Products/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setRefresh(!refresh);
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message || "Server error");
    }
  };
  /* ================== */
  /* =====Upadte product=== */
  /* ===================== */
  const ModifyProduct = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5001/Products/product/${id}`, { title, image, price, stock ,description,  CategoryId: category},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setRefresh(!refresh);
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message || "Server error");
    }
  };

  return (
    <>
      {/* ____Ajouter un produit______ */}
      <div className="admin-container">
        <div className="addCategory">
          <div className="addCategory_content">
            <h2> + Add Product</h2>
            <input type="text" onChange={handleNameChange} placeholder="Name" />
            <input
              type="text"
              onChange={handleImageChange}
              placeholder="Image URL"
            />
            <input
              type="text"
              onChange={handleDescriptionChange}
              placeholder="Description"
            />
            <input
              type="Number"
              onChange={handlePriceChange}
              placeholder="Price"
            />
            <input
              type="Number"
              onChange={handleStockChange}
              placeholder="Stock"
            />
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="select-category"
            >
              <option value="">Select Category</option>

              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <button onClick={addProduct}>Save</button>
            <p id="error-message">{error}</p>
          </div>

          {/* ____Afficher les produits dispo_________ */}
          <div className="productTableContainer">
            <table className="productTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                  
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="productImage"
                      />
                    </td>

                    <td className="productTitle">{product.title}</td>

                    <td className="productDesc">{product.description}</td>

                    <td>{product.CategoryId?.name}</td>

                    <td>
                      <span className="stockBadge">{product.stock}</span>
                    </td>

                    <td>
                      <button className="priceBadge">{product.price} DA</button>
                    </td>
                     <td>
                      <GrUpdate onClick={() => startUpdate(product)}
  style={{ color: "#1fc730", cursor: "pointer" }}
/>
                    </td>

                    <td>
                      <FaTrashAlt style={{color:"red",cursor:"pointer"}} onClick={() => deleteProduct(product._id)} />
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAddProduct;
