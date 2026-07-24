import Image from 'next/image';
import React from 'react'
import MerchCard from './MerchCard';

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

            const hasEvilNeuro = product.product_characters.some(
               (pc) => pc.character_id === 13
            );

            console.log(product)

            if (!hasEvilNeuro) return null;

            return (
               <MerchCard key={product.id} product={product} />
            );
         })}
      </div>
   )
}

export default NeuroSamaFeaturedMerch
