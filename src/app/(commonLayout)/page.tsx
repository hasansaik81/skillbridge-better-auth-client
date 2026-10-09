// import { Button } from "@/components/ui/button";


// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <Button>This is Home Page </Button>
//     </div>
//   );
// }




// import { publicFeaturedTutor } from "@/actions/public.action";
// import { FeaturedTutors } from "@/components/Home/FeaturedTutors";
// import { Hero } from "@/components/Home/Hero";
// import { HowItWorks } from "@/components/Home/HowltWorks";
// import { TopCategories } from "@/components/Home/TopCategories";


// export default async function CommonPage() {
//   const { data: featuredTutors } = await publicFeaturedTutor();
//   return (
//     <div>
//       <Hero />
//       <FeaturedTutors initialData={featuredTutors} />
//       <TopCategories />
//       <HowItWorks />
//     </div>
//   );
// }



// import { publicFeaturedTutor } from "@/actions/public.action";
// import { FeaturedTutors } from "@/components/Home/FeaturedTutors";
// import { Hero } from "@/components/Home/Hero";
// import { HowItWorks } from "@/components/Home/HowltWorks";
// import { TopCategories } from "@/components/Home/TopCategories";

// export default async function CommonPage() {
//   const { data: featuredTutors } = await publicFeaturedTutor();
  
//   return (
//     <main className="min-h-screen bg-background text-foreground overflow-hidden">
//       {/* Main Page Container */}
//       <div className="flex flex-col gap-16 pb-20">
        
//         {/* Hero Section (Usually full width or contained inside Hero component) */}
//         <Hero />

//         {/* Content Sections with Consistent Width & Spacing */}
//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-20">
//           <FeaturedTutors initialData={featuredTutors} />
//           <TopCategories />
//           <HowItWorks />
//         </div>

//       </div>
//     </main>
//   );
// }



import { publicFeaturedTutor } from "@/actions/public.action";
import { FeaturedTutors } from "@/components/Home/FeaturedTutors";
import { Hero } from "@/components/Home/Hero";
import { HowItWorks } from "@/components/Home/HowltWorks";
import { TopCategories } from "@/components/Home/TopCategories";

// Aboshyoi 'export default' thakte hobe ebong eta ekta function hote hobe
export default async function Page() {
  const { data: featuredTutors } = await publicFeaturedTutor();
  
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="flex flex-col gap-16 pb-20">
        <Hero />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-20">
          <FeaturedTutors initialData={featuredTutors} />
          <TopCategories />
          <HowItWorks />
        </div>
      </div>
    </main>
  );
}