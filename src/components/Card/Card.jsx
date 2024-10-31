import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import useData from '../../hooks/useData';

function Card({ product }) {
  const { brand, title, price, discountPercentage, images, id } = product
  const { cart, addToCart, removeFromCart } = useData()
  const productInCart = cart.find((item) => item.id === id);
  const discountAmount = price && discountPercentage ? (price * (discountPercentage / 100)).toFixed(2) : 0;
  const discountedPrice = price && discountAmount && (price - discountAmount).toFixed(2)
  const updatedProduct = {
    ...product,
    discountedPrice
  }

  return (
    <div className="group flex relative flex-col flex-1 shrink rounded-lg basis-0 min-h-[332px]  max-w-[200px] bg-white">
      {discountPercentage && (
        <div className='ribbonContainer text-center'>
          <div className="ribbon">
            <span className='align-middle'>  -৳ {discountPercentage}%</span>
            <div className="ribbonTail"></div>
            <div className="ribbonLowerTail"></div>
          </div>
        </div>
      )}
      <div className="flex overflow-hidden z-0 gap-2.5 justify-center w-full rounded-md min-h-[210px] bg-neutral-200 px-2">
        <img loading="lazy" src={images[0]} alt={title} className="object-contain flex-1 shrink rounded-lg aspect-square basis-0 w-[210px] h-[210px]" />
      </div>
      <div className="flex z-0 flex-col p-2 w-full">
        <div className="flex flex-col w-full">
          <div className="text-sm leading-none text-gray-500 text-ellipsis">
            {brand}
          </div>
          <h2 className="text-base leading-6 font-[525] text-ellipsis text-slate-800 h-10">
            {title}
          </h2>
        </div>
        <div className="flex gap-2 items-center mt-2 w-full text-right min-h-[28px]">
          <div className="flex gap-1 items-start self-stretch my-auto text-xl tracking-normal leading-none text-blue-500 whitespace-nowrap">
            <span className="font-[525] w-[13px]">৳</span>
            <span className="font-[475]">{discountedPrice}</span>
          </div>
          {price && (
            <div className="self-stretch my-auto text-sm tracking-normal leading-none text-gray-500 line-through">
              ৳ {price}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center space-y-2 hidden group-hover:flex rounded-lg">
          <div className='absolute top-2 right-4 leading-none font-[475] hover:cursor-pointer'>
            <Icon name="fa-regular fa-heart" size="lg" />
          </div>

          <div className="flex flex-col space-y-2 text-sm leading-none font-[475] w-full mx-auto px-4">
            {(productInCart && productInCart.id == id) ? <div
              className="flex gap-1 justify-between items-center py-1.5 pr-4 pl-3 w-full text-white rounded-md border-2 border-solid  bg-green-500  border-green-500 border-opacity-30 min-h-[32px]"
            >
              <div className="self-stretch pb-0.5 my-auto cursor-pointer"
                onClick={() => removeFromCart(id)}
              >
                <Icon name="fa-regular fa-trash-can" size="lg" />

              </div>
              <div className="self-stretch pb-0.5 my-auto">
                {productInCart.quantity} Added in cart
              </div>
              <div className="self-stretch pb-0.5 my-auto cursor-pointer" onClick={() => addToCart(updatedProduct)}>
                <Icon name="fa-solid fa-plus" size="lg" />
              </div>
            </div> :
              <Button
                icon="fa-solid fa-cart-shopping"
                text="Add to Cart"
                onClick={() => addToCart(product)}
              />}
            <Button
              icon="fa-regular fa-eye"
              text="Quick View"
              onClick={() => console.log(` clicked`)}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;