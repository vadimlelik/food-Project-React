import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import CategoriList from '../components/CategoriList';

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return <>{!catalog.length ? <Preloader /> : <CategoriList catalog={catalog} />}</>;
}
