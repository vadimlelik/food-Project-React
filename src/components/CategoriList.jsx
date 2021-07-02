import React from 'react';
import CategoryItem from './CategoryItem';

const CategoriList = (props) => {
  const { catalog = [] } = props;
  return (
    <div className="list ">
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
};

export default CategoriList;
