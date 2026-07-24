"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ merch }) => {
   const [highlightedImage, setHighlightedImage] = useState(
      merch.product_images[0].image_url
   );

   return (
      <div className="flex h-screen">
         {/* Thumbnail Images */}
         <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
            {merch.product_images.map((product_image, index) => (
               <button
                  key={index}
                  onClick={() =>
                     setHighlightedImage(product_image.image_url)
                  }
                  className="relative w-[5.26vw] h-[11.57vh] shrink-0"
               >
                  <Image
                     src={product_image.image_url}
                     alt={merch.name}
                     fill
                     className={`object-cover border transition ${highlightedImage === product_image.image_url
                        ? "border-[#FF5900] border-2"
                        : "border-none"
                        }`}
                  />
               </button>
            ))}
         </div>

         <div className="relative w-[42.24vw] h-full">
            <Image
               src={highlightedImage}
               alt={merch.name}
               fill
               priority
               className="object-cover"
            />
         </div>
      </div>
   );
};

export default ProductImages;