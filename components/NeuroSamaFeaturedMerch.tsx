import Image from 'next/image';
import React from 'react'
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

interface ProductImage {
   image_url: string;
   display_order: number;
}

interface ProductCharacter {
   character_id: number;
   product_id: number;
}

interface Product {
   id: number;
   name: string;
   description: string;
   price: number;
   slug: string;
   stock: number;
   category_id: number;
   created_at: string;
   updated_at: string;
   product_images: ProductImage[];
   product_characters: ProductCharacter[];
}

interface ProductListProps {
   products: Product[];
}

const NeuroSamaFeaturedMerch = ({ products }: ProductListProps) => {

   return (
      <div className="w-full flex flex-wrap items-center justify-center gap-[2rem]">
         {products?.map((product) => {


            console.log(
               product.product_characters.some(
                  (pc) => pc.character_id === 13
               )
                  ? product.product_characters
                  : null
            );

            const coverImage = product.product_images[0];

            const hasEvilNeuro = product.product_characters.some(
               (pc) => pc.character_id === 13
            );

            if (!hasEvilNeuro) return null;

            return (
               <div key={product.id} className="relative flex flex-col aspect-square gap-[.75rem]">
                  {coverImage && (
                     <Image
                        width={481}
                        height={575}
                        src={coverImage.image_url}
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
            );
         })}
      </div>
   )
}

export default NeuroSamaFeaturedMerch
