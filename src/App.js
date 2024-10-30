import React, { useEffect } from 'react';
import './App.css';
import ProductList from './views/ProductList/ProductList';
import DataProvider from './context/DataProvider';
import useData from './hooks/useData';
import useDataHelper from './hooks/useDataHelper';


function App() {
const {fetchData} =useData()
// const dataContext = useData();

  useEffect(() => {
    fetchData('https://dummyjson.com/products');
  }, []);

  return (
<div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-10">         
        <ProductList />
      </div>
  );
}

export default App;
