import React from "react";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Reviews reviewsPromise = {reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
