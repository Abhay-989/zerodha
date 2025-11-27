import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced cahrts, an elegant, and more. Enjoy the kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnDemo=""
        googlePlay=""
        
        appStore=""
      />
      <RightSection 
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The centarl dashboard for your Zerodha account. Gain insights into trades and investments with in-deptth reports and visualisations."
        learnDemo=""
       />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual fund online, commission-free, delivered directly to your Deamt account. Enjoy the investment experimence on your Android and iOS device."
        tryDemo=""
        learnDemo=""
        googlePlay=""
        appStore=""
      />
       <RightSection 
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with oursuper simple HTTP/JSON APIs. If you are a startup, built ypur investment app and showcase it to our clientbase."
        learnDemo=""
       />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lession with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnDemo=""
        googlePlay=""
        appStore=""
      />
     <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog</p>

      <Universe />
    </>
  );
}

export default ProductPage;
