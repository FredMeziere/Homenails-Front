import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//importation des composants pour les routes
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Product/Product";
import Contact from "./Components/Contact/Contact";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import CGV from "./Components/CGV/CGV";
import Legacy from "./Components/Legacy/Legacy";
import Privacy from "./Components/Privacy/Privacy";
import Account from "./Components/Account/Account";
import Panier from "./Components/Panier/Panier";
import Confirm from "./Components/Confirm/Confirm";
import Payment from "./Components/Payment/Payment";
import DeliveryInformation from "./Components/DeliveryInformation/DeliveryInformation";
import Admin from "./Components/Admin/Admin";
import AdminOrders from "./Components/AdminOrders/AdminOrders";
import AdminClients from "./Components/AdminClients/AdminClients";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";



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