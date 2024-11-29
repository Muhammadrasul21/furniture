import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Catalog from "../../components/Catalog";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Catalog/>
      </Layout>
    </div>
  );
};

export default Home;
