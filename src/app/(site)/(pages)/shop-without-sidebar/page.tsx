import React, { Suspense } from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import type { Metadata } from "next";
import Loading from "@/components/Common/Loading";

export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Next.js E-commerce Template",
  description: "This is the Shop Page for the NextCommerce Template",
};

export default function ShopWithoutSidebarPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ShopWithoutSidebar />
      </Suspense>
    </main>
  );
}