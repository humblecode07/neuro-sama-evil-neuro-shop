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
      const productCharacters = insertedCharacters.filter((character) =>
         product.characters.includes(character.slug)
      );


      const category = insertedCategories.find(
         c => c.slug === product.category
      );

      if (!productCharacters.length || !category) continue;

      const { data: insertedProduct, error: productError } = await supabase
         .from("products")
         .insert({
            name: product.name,
            slug: product.slug,
            description: product.description,
            category_id: category.id,
            price: product.price,
            stock: product.stock,
         })
         .select()
         .single();

      if (productError) {
         console.log(productError);
         continue;
      }

      const { error: productCharacterError } = await supabase
         .from("product_characters")
         .insert(
            productCharacters.map((character) => ({
               product_id: insertedProduct.id,
               character_id: character.id,
            }))
         );

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