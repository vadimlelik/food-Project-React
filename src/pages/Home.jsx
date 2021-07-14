import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { useLocation, useHistory } from 'react-router-dom'
import { Preloader } from '../components/Preloader';
import CategoriList from '../components/CategoriList';
import Search from '../components/Search'

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([])
  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSerch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    push({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(search ?
        data.categories.filter((item) => item.strCategory
          .toLowerCase()
          .includes(search.split('=')[1]
            .toLowerCase()
          )
        ) : data.categories
      )
    })
  }, [search]);

  return <>
    <Search cb={handleSerch} />
    {!catalog.length ? <Preloader /> : <CategoriList catalog={filteredCatalog} />}
  </>;
}
