"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const MerchCard = ({ product }) => {
   const router = useRouter();

   const [image, setImage] = useState(product.product_images[0].image_url);

   const merchDisplayChangeWhenHover = () => {
      setImage(product.product_images[1].image_url)
   }

   const merchDisplayChangeWhenNotHover = () => {
      setImage(product.product_images[0].image_url)
   }

   const clickCard = (data) => {
      router.push(`${data.characters[0].slug}/${product.slug}`)
   }

   return (
      <div onClick={() => clickCard(product)} onMouseEnter={() => merchDisplayChangeWhenHover()} onMouseLeave={() => merchDisplayChangeWhenNotHover()} className="relative flex flex-col aspect-square gap-[.75rem]">
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
