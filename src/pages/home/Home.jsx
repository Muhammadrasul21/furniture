import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Catalog from "../../components/Catalog";
import About from "../../components/About";
import Product from "../../components/Product";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Catalog />
        <About />
        <Product/>
      </Layout>
    </div>
  );
};

export default Home;
