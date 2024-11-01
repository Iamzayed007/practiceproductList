import React, { useEffect } from 'react';
import './App.css';
import ProductList from './views/ProductList/ProductList';
import useData from './hooks/useData';


function App() {
  const { fetchData } = useData()


  useEffect(() => {
    fetchData('https://dummyjson.com/products?limit=50');
  }, []);

  return (
    <div className="relative isolate  px-6 py-14 sm:py-32 lg:px-10 flex justify-center">
      <div className="relative isolate  px-6   lg:px-10 lg:w-[1112px]">
          <ProductList />
      </div>
    </div>
  );
}

export default App;
