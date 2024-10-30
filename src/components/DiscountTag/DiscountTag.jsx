import React from 'react';

function DiscountTag({ amount }) {
  return (
    <div className="flex absolute -left-2 top-3 z-4 items-start bg-gradient-to-r from-orange-500 to-orange-400">
      <div className="flex z-0 gap-1 justify-center items-center py-1 pr-1.5 pl-2 text-xs tracking-tight leading-none text-center text-white rounded font-[525] ">
        <div className="gap-2.5 self-stretch pb-0.5 my-auto">
          - ৳ {amount}
        </div>
      </div>
      <div className="flex relative z-0 gap-1 self-stretch w-3 h-full">
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97305bb4fc191afba7e36c5f4d656461a948c5ac331c81a25d96fcc880425f66?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain z-0 flex-1 shrink w-3 aspect-[0.5] basis-0 fill-orange-300" /> */}
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b18864d66e561a8fcc1008c5efc4cb6633b474e74ab24050d26295c3265f8468?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain absolute inset-0 z-0 shrink-0 self-start w-3 aspect-[0.5] fill-amber-600" /> */}
      </div>
      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f3806e34c2d4541ec4b129b6b352664cea8c2030b94822063f514d6d149471f?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain absolute left-0 -bottom-1.5 z-0 shrink-0 w-1 h-1.5 aspect-[0.67]" /> */}
    </div>
  );
}

export default DiscountTag;

// const DiscountTag = ({ amount }) => {
//   return (
//     <div className="flex relative items-start">
//       <div className="flex z-0 gap-1 justify-center items-center py-1 pr-1.5 pl-2 text-xs tracking-tight leading-none text-center text-white rounded font-[525]">
//         <div className="gap-2.5 self-stretch pb-0.5 my-auto">
//           - ৳ {amount}
//         </div>
//       </div>
//       <div className="flex relative z-0 gap-1 self-stretch w-3 h-full">
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97305bb4fc191afba7e36c5f4d656461a948c5ac331c81a25d96fcc880425f66?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain z-0 flex-1 shrink w-3 aspect-[0.5] basis-0 fill-orange-300" />
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b18864d66e561a8fcc1008c5efc4cb6633b474e74ab24050d26295c3265f8468?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain absolute inset-0 z-0 shrink-0 self-start w-3 aspect-[0.5] fill-amber-600" />
//       </div>
//       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a39a7223cde0b98b90dc005c5c6dfd2f2f3d7ea647d6b6f12b9a4e3bd80ab07a?placeholderIfAbsent=true&apiKey=5d89fb2fb1a549d7b51358099056dc08" alt="" className="object-contain absolute left-0 -bottom-1.5 z-0 shrink-0 w-1 h-1.5 aspect-[0.67]" />
//     </div>
//   );
// };

// export default DiscountTag;