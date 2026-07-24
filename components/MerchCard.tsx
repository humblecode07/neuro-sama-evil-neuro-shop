"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const MerchCard = ({ product }) => {
   const [image, setImage] = useState(product.product_images[0].image_url);

   const merchDisplayChangeWhenHover = () => {
      setImage(product.product_images[1].image_url)
   }

   const merchDisplayChangeWhenNotHover = () => {
      setImage(product.product_images[0].image_url)
   }

   return (
      <div onMouseEnter={() => merchDisplayChangeWhenHover()} onMouseLeave={() => merchDisplayChangeWhenNotHover()} className="relative flex flex-col aspect-square gap-[.75rem]">
         {image && (
            <Image
               width={481}
               height={575}
               src={image}
               alt={product.name}
               priority
               className="object-cover border rounded-[.25rem]"
            />
         )}

         <div className="flex flex-col gap-[6px]">
            <span className="font-fredoka text-[#FFFFFF] font-semibold text-[1.25rem]">
               {product.name}
            </span>

            <span className="font-fredoka text-[#FFFFD9] font-semibold">
               ${(product.price / 100).toFixed(2)}
            </span>
         </div>
      </div>
   )
}

export default MerchCard
