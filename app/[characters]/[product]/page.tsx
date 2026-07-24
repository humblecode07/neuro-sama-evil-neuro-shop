import ProductImages from "@/components/ProductImages";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

const Page = async ({ params }) => {
   const { characters, product } = await params;

   const cookieStore = await cookies();
   const supabase = await createClient(cookieStore);

   const { data: merch, error } = await supabase
      .from("products")
      .select(`*, 
         product_images (
          image_url,
          display_order
        )`)
      .eq("slug", product)
      .single();

   return (
      <div className="flex">
         <div className="w-[47.5vw] bg-[#ffffff]">
            <ProductImages merch={merch} />
         </div>
         <div className="w-[52.5vw] bg-[#FDDDC7]">

         </div>
      </div>
   );
};

export default Page;