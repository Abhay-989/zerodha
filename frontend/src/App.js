
import {Navigate, Route, Routes } from "react-router-dom";

import Apps from "./components/Apps";
import BuyActionWindow from "./components/BuyActionWindow";
import Dashboard from "./components/Dashboard";
import Funds from "./components/Funds";
import GeneralContext from "./components/GeneralContext";
import Holdings from "./components/Holdings";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components/Summary";
import TopBar from "./components/TopBar";
import WatchList from "./components/WatchList";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/AuthPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import { DoughnutChart } from "./components/DoughnutChart";


import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
	const { checkAuth, authUser, checkingAuth } = useAuthStore();

	useEffect(() => {
  if (checkAuth) {
    checkAuth();
  }
}, [checkAuth]);


	if (checkingAuth) return null;

	return (
		<div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
    
			<Routes>
 <Route path="/apps" element={ <Apps/>} />
 <Route path="/BuyActionWindow" element={<BuyActionWindow/>} />
 <Route path="/Dashboard" element={<Dashboard/>} />
 <Route path="/DoughnutChart" element={ <DoughnutChart/>} />
 <Route path="/Funds" element={<Funds/>} />
 <Route path="/GeneralContext" element={<GeneralContext/>} />
 <Route path="/Holdings" element={<Holdings/>} />
 <Route path="/Home" element={<Home/>} />
 <Route path="/Menu" element={<Menu/>} />
<Route path="/Orders" element={ <Orders/>} />
 <Route path="/Positions" element={ <Positions/>} />
 <Route path="/Summary" element={<Summary/>} />
 <Route path="/TopBar" element={<TopBar/>} />
 <Route path="/WatchList" element={<WatchList/>} />
  <Route path="/" element={<HomePage />} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/product" element={<ProductPage />} />
  <Route path="/pricing" element={<PricingPage />} />
  <Route path="/support" element={<SupportPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>
	
		 </div>
);
	
}

export default App;



