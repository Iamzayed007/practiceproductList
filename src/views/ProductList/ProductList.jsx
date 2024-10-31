import React from 'react';
import Card from '../../components/Card/Card';
import useData from '../../hooks/useData';



function ProductList() {
    const {products}= useData()

    
  return (
    // <div className="flex flex-col px-1">
    //   <div className="flex flex-col w-full max-md:max-w-full">
        <div className="grid grid-rows-6 grid-flow-col gap-4 items-start w-full max-md:max-w-full">
          {products.products && products.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

    //   </div>
    // </div>
  );
}

export default ProductList;
