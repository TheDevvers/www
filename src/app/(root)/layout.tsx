"use client";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="grow">
        <Navbar className="max-w-7xl" />
        {children}
        <Footer />
      </main>
    </>
  );
}
