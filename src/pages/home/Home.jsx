import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Catalog from "../../components/Catalog";
import About from "../../components/About";
import Product from "../../components/Product";
import Brend from "../../components/Brend";
import Blog from "../../components/Blog";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Catalog />
        <About />
        <Product/>
        <Brend/>
       <Blog/>
      </Layout>
    </div>
  );
};

export default Home;
