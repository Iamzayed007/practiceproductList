import React from 'react';
import Card from '../../components/Card/Card';
import useData from '../../hooks/useData';



function ProductList() {
    const {products}= useData()

    
  return (
    // <div className="flex flex-col px-1">
    //   <div className="flex flex-col w-full max-md:max-w-full">
        <div className="grid grid-cols-1  gap-4 items-center justify-center w-full max-md:max-w-full md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          {products.products && products.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

    //   </div>
    // </div>
  );
}

export default ProductList;
