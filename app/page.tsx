"use client";
import { useEffect, useState } from "react";

import NavBaar from "./Components/NavBaar";
import MobNavbar from "./Components/MobNavbar";
import Hero from "./Components/Hero";
import Bnner from "./Components/Bnner";
import Products from "./Components/Products";
import Cards from "./Components/Cards";
import Banner from "@/app/Components/Banner";
import LastBaner from "./Components/LastBaner";
import Footer from "./Components/Footer";
import Spinner from "./Components/Spinner";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <NavBaar />
          <MobNavbar />
          <Hero />
          <Bnner />
          <Products />
          <Cards />
          <Banner />
          <Cards />
          <LastBaner />
          <Footer />
        </>
      )}
    </>
  );
}
