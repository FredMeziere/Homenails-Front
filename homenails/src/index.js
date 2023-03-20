import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//importation des composants pour les routes
import Header from "./Components/pages/Header/Header";
import Home from "./Components/pages/Home/Home";
import Shop from "./Components/pages/Shop/Shop";
import Product from "./Components/pages/Product/Product";
import Contact from "./Components/pages/Contact/Contact";
import Signup from "./Components/pages/Signup/Signup";
import Login from "./Components/pages/Login/Login";
import CGV from "./Components/pages/CGV/CGV";
import Legacy from "./Components/pages/Legacy/Legacy";
import Privacy from "./Components/pages/Privacy/Privacy";
import Account from "./Components/pages/Account/Account";
import Panier from "./Components/pages/Panier/Panier";
import Confirm from "./Components/pages/Confirm/Confirm";
import Payment from "./Components/pages/Payment/Payment";
import DeliveryInformation from "./Components/pages/DeliveryInformation/DeliveryInformation";
import Admin from "./Components/pages/Admin/Admin";
import AdminOrders from "./Components/pages/AdminOrders/AdminOrders";
import AdminClients from "./Components/pages/AdminClients/AdminClients";
import About from "./Components/pages/About/About";
import Error from "./Components/pages/Error/Error";
import Footer from "./Components/pages/Footer/Footer";

import "./sass/main.scss"

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cgv" element={<CGV />} />
      <Route path="/legacy" element={<Legacy />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/account" element={<Account />} />
      <Route path="/basket" element={<Panier />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/delivery" element={<DeliveryInformation />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/clients" element={<AdminClients />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);