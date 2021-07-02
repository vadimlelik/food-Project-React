import React from 'react';
import Link from 'react-router-dom';

const CategoryItem = (props) => {
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = props;
  return (
    <div class="card">
      <div class="card-image">
        <img src={strCategoryThumb} alt={strCategoryThumb} />
        <span class="card-title">{strCategory}</span>
      </div>
      <div class="card-content">
        <p>{strCategoryDescription}</p>
      </div>
      <div className="card-action">
        <Link to={`/categoru`}></Link>
      </div>
    </div>
  );
};

export default CategoryItem;
