import "dotenv/config";

import { createClient } from "@supabase/supabase-js";
import { characters, categories, products } from "@/merch/data";

const supabase = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL!,
   process.env.NEXT_SECRET_API_KEY!
);

async function seed() {
   const { data: insertedCharacters, characterError } = await supabase.from("characters").insert(characters).select();
   const { data: insertedCategories, categoryError } = await supabase.from("categories").insert(categories).select();

   if (characterError || categoryError) {
      console.log(characterError || categoryError);
      return;
   }

   for (const product of products) {
      const character = insertedCharacters?.find(
         c => c.slug === product.character
      )

      const category = insertedCategories.find(
         c => c.slug === product.category
      );

      if (!character || !category) continue;

      const { data: insertedProduct, error: productError } = await supabase
         .from("products")
         .insert({
            name: product.name,
            slug: product.slug,
            description: product.description,
            character_id: character.id,
            category_id: category.id,
            price: product.price,
            stock: product.stock,
         })
         .select()
         .single();

      const { error: imageError } = await supabase
         .from("product_images")
         .insert(
            product.images.map((image) => ({
               product_id: insertedProduct.id,
               image_url: image.image_url,
               display_order: image.display_order,
            }))
         );

      if (imageError) {
         console.log(imageError);
      }
   }
}

seed();