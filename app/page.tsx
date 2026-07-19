import HomeScreen from "@/components/HomeScreen";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  const supabase = await createClient(cookieStore);

  const { data } = await supabase.from("products").select("*");

  console.log(data);

  return (
    <div className="h-full w-full overflow-hidden">
      <HomeScreen />
    </div>
  );
}
