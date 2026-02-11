import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Ebook from "../components/Ebook";
import NewReleaseBook from "../components/NewReleaseBook";
import FeatureBook from "../components/FeatureBook";
import NewBook from "../components/NewBook";
import NewsLetter from "../components/newsletter";
import LatestArticles from "../components/LatestArticles";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Ebook />
      <NewReleaseBook />
      <FeatureBook />
      <NewBook />
      <NewsLetter />
      <LatestArticles />
    </>
  );
};

export default Home;
