import React from 'react';
import DiscountTag from '../DiscountTag/DiscountTag';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

function Card({ brand, title, price, originalPrice, discount, images }) {
  return (
    <div className="group flex relative flex-col flex-1 shrink rounded-lg basis-0 min-h-[332px]  max-w-[200px]">
      {discount && (
        <div className="flex absolute -left-1 top-3 z-2 items-start self-start">
          <div className="flex z-2 gap-1 justify-center items-center py-1 pr-1.5 pl-2 text-xs tracking-tight leading-none text-center text-white rounded font-[525]">
            <div className="gap-2.5 self-stretch pb-0.5 my-auto">
              - ৳ {discount}
            </div>
          </div>
          <div className="flex relative z-0 gap-1 self-stretch w-3 h-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97305bb4fc191afba7e36c5f4d656461a948c5ac331c81a25d96fcc880425f66?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain z-0 flex-1 shrink w-3 aspect-[0.5] basis-0 fill-orange-300" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b18864d66e561a8fcc1008c5efc4cb6633b474e74ab24050d26295c3265f8468?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain absolute inset-0 z-0 shrink-0 self-start w-3 aspect-[0.5] fill-amber-600" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bece2748e9764f92a6f330d18388496a0afdab6f1beb0a2f7696fbcd281ed70?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain absolute left-0 -bottom-1.5 z-0 shrink-0 w-1 h-1.5 aspect-[0.67]" />
        </div>
        // <DiscountTag amount={200}/>
      )}
      {/* <DiscountTag amount={200}/> */}
      <span className="absolute -left-2 top-3 z-40 bg-orange-400 text-white text-sm font-semibold px-2 py-1 rounded">
          ৳ 200
        </span>
        {/* <span className="bg-orange-400 text-white px-4 py-2 rounded-full">৳ 200</span> */}
        {/* <div className="absolute top-2 left-2 flex items-center">
        <div className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-l-full"></span>
          <span className="relative text-white text-sm font-semibold px-2 py-1 rounded-l-lg rounded-r-md bg-orange-500 bg-opacity-0">
            - ৳ 200
          </span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 bg-orange-400 clip-triangle"></div>
        </div>
      </div> */}
      <div className="flex overflow-hidden z-0 gap-2.5 justify-center w-full rounded-md min-h-[210px] bg-neutral-200">
        <img loading="lazy" src={images[0]} alt={title} className="object-contain flex-1 shrink rounded-lg aspect-square basis-0 w-[210px] h-[210px]" />
      </div>
      <div className="flex z-0 flex-col p-2 w-full">
        <div className="flex flex-col w-full">
          <div className="text-sm leading-none text-gray-500 text-ellipsis">
            {brand}
          </div>
          <h2 className="text-base leading-6 font-[525] text-ellipsis text-slate-800">
            {title}
          </h2>
        </div>
        <div className="flex gap-2 items-center mt-2 w-full text-right min-h-[28px]">
          <div className="flex gap-1 items-start self-stretch my-auto text-xl tracking-normal leading-none text-blue-500 whitespace-nowrap">
            <span className="font-[525] w-[13px]">৳</span>
            <span className="font-[475]">{price.toLocaleString()}</span>
          </div>
          {originalPrice && (
            <div className="self-stretch my-auto text-sm tracking-normal leading-none text-gray-500">
              ৳ {originalPrice.toLocaleString()}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center space-y-2 hidden group-hover:flex rounded-lg">
        <div className='absolute top-2 right-4 leading-none font-[475] hover:cursor-pointer'>
          <Icon name="fa-regular fa-heart" size="lg"/>
        </div>
        
        <div className="flex flex-col space-y-2 text-sm leading-none font-[475] max-w-[186px]">
    
        <Button
            icon="fa-solid fa-cart-shopping"
            text="Add to Cart"
            onClick={() => console.log(` clicked`)}
          />
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