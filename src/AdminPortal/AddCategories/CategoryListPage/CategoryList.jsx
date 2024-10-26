import React, { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { MdDelete } from "react-icons/md";


const CategoryList = () => {
  // Example initial data (could be replaced with API data)
  const [categories, setCategories] = useState([
    { id: 1, category: "Electronics", subcategory: "Mobile" },
    { id: 2, category: "Fashion", subcategory: "Clothing" },
    { id: 3, category: "Home", subcategory: "Furniture" },
  ]);

  // Delete handler
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <>
<Navbar/>
<div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      <div className={styles.container}>
        <h2>Category List</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.category}</td>
                  <td>{cat.subcategory}</td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(cat.id)}
                    >
                      Delete <MdDelete style={{marginBottom:"3px"}} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={styles.noData}>
                  No categories available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default CategoryList;
