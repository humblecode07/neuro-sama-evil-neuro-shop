import FeaturedMerch from "@/components/NeuroSamaFeaturedMerch";
import HomeScreen from "@/components/HomeScreen";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  const supabase = await createClient(cookieStore);

  const { data } = await supabase
    .from("products")
    .select(`
        *,
        product_images (
          image_url,
          display_order
        ),
        product_characters (
          character_id,
          product_id
        )
      `)
    .order("display_order", { referencedTable: "product_images" });

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <HomeScreen featuredMerch={<FeaturedMerch products={data} />} />
    </div>
  );
}
