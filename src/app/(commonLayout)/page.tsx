// import { Button } from "@/components/ui/button";


// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <Button>This is Home Page </Button>
//     </div>
//   );
// }




// import { publicFeaturedTutor } from "@/actions/public.action";
import { FeaturedTutors } from "@/components/Home/FeaturedTutors";
import { Hero } from "@/components/Home/Hero";
import { HowItWorks } from "@/components/Home/HowItWorks";
import { TopCategories } from "@/components/Home/TopCategories";

export default async function CommonPage() {
  // const { data: featuredTutors } = await publicFeaturedTutor();
  return (
    <div>
      <Hero />
      {/* <FeaturedTutors initialData={featuredTutors} /> */}
      {/* <TopCategories />
      <HowItWorks /> */}
    </div>
  );
}
