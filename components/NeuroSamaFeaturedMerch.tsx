import Image from 'next/image';
import React from 'react'
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

interface ProductImage {
   image_url: string;
   display_order: number;
}

interface Product {
   id: number;
   name: string;
   description: string;
   price: number;
   slug: string;
   stock: number;
   category_id: number;
   character_id: number;
   created_at: string;
   updated_at: string;
   product_images: ProductImage[];
}

interface ProductListProps {
   products: Product[];
}

const NeuroSamaFeaturedMerch = ({ products }: ProductListProps) => {

   console.log(products)

   return (
      <div className="w-full flex flex-wrap items-center justify-center gap-[2rem]">
         {products?.map((product) => {
            const coverImage = product.product_images[0];

            console.log(product.character_id + "baaa")

            if (product.character_id === 4) {
               return (
                  <div key={product.id} className="relative w-[30.0625rem] h-[35.9375rem] aspect-square">
                     {coverImage && (
                        <Image
                           src={coverImage.image_url}
                           alt={product.name}
                           fill
                           priority
                           className="object-cover border rounded-[.25rem]"
                        />
                     )}
                  </div>
               );
            }
         })}
      </div>
   )
}

export default NeuroSamaFeaturedMerch
