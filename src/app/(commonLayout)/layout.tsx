// import { Footer } from "@/components/Footer/Footer";
// import Navbar from "@/components/NavBar/NavBar";
import Navbar from "@/components/Navbar/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Skill Bridge",
    default: "Skill Bridge",
  },
  description: "Connect with expert tutors and enhance your skills",
};

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}




// import { Suspense } from "react";
// import type { Metadata } from "next";
// import Navbar from "@/components/Navbar/NavBar";

// export const metadata: Metadata = {
// title: {
// template: "%s | Skill Bridge",
// default: "Skill Bridge",
// },
// description: "Connect with expert tutors and enhance your skills",
// };

// function NavbarFallback() {
// return ( <header className="sticky top-0 z-50 h-16 w-full border-b bg-background" />
// );
// }

// export default function CommonLayout({
// children,
// }: {
// children: React.ReactNode;
// }) {
// return (
//   <div className="flex min-h-screen flex-col">
//     <Suspense fallback={<NavbarFallback />}>
//       <Navbar />
//     </Suspense>
//     <div className="flex-1">{children}</div>
//   </div>
// );
// }
