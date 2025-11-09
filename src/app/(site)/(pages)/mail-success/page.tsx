import React from "react";
import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mail Success Page | NextCommerce Nextjs E-commerce template",
  description: "This is Mail Success Page for NextCommerce Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
