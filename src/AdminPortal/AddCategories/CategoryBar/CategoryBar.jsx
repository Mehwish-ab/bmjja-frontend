import React, { useEffect, useState } from 'react';
import styles from './CategoryBar.module.css'; 

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Mock fetching categories or fetch them from an API
    const fetchCategories = async () => {
      const fetchedCategories = [
        'Technology', 'Health', 'Business', 'Sports', 'Education',  'Business', 'Sports', 'Education'
      ];
      setCategories(fetchedCategories);
    };
    
    fetchCategories();
  }, []);

  return (
    <nav className={styles.categoryBar}>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryBar;
