import { useState } from "react"

const useDataHelper = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([]);
  
  const fetchData = async (url) => {
    if (!url) return; // Exit if no URL is provided

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Failed to fetch products");
        return;
      }

      const data = await response.json();

      setProducts(data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);

      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === productId);

      if (productInCart.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);
      if (isInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return {
    products,
    cart,
    wishlist,

    setProducts,

    fetchData,
    addToCart,
    removeFromCart,
    toggleWishlist
  }
}
export default useDataHelper