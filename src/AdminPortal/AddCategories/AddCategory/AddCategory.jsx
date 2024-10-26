import React, { useState } from "react";
import styles from "./AddCategory.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

const AddCategory = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const navigate = useNavigate();

  const handleAddCategory = (event) => {
    event.preventDefault();
    if (category && subCategory) {
      onAddCategory({ name: category, subcategories: [subCategory] });
      setCategory("");
      setSubCategory("");
      navigate("/uploadvideo");
    } else {
      alert("Please enter both category and subcategory");
    }
  };
  
 const handleCategoryList =() => {
  navigate("/categorylist");
 }
  return (
    <>
      <Navbar />
      <div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Add Category and Subcategory</h2>
            <button onClick={handleCategoryList} className={styles.categorylist}>
              Browse Category List
            </button>
          </div>
          <form onSubmit={handleAddCategory} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter new category"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subCategory">Subcategory</label>
              <input
                id="subCategory"
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="Enter subcategory"
              />
            </div>
            <button type="submit" className={styles.addButton}>
              Add Category
            </button>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default AddCategory;
