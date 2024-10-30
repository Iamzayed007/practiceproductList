import { useState } from "react"

 const useDataHelper = () => {
    const [products,setProducts] =useState([])
    const [cart,setCart] =useState([])

    const fetchData = async (url) => {
        if (!url) return; // Avoid null URL calls
        const response = await fetch(url);
        if (!response.ok) {
          console.log('Failed to fetch products');
          return;
        }
        const products = await response.json();
        setProducts(products);
        console.log(products);
        
      };
      const AddToCart =(item)=>{
console.log(item);

      }
  return {
    products,
    setProducts,
    fetchData,
    AddToCart
  }
}
export default useDataHelper