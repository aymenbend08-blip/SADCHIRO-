import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Suma from "./pages/Suma";
import Debrah from "./pages/Debrah";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { I18nProvider } from "./i18n";
export default function App(){return <I18nProvider><div className="flex min-h-screen flex-col"><Navbar/><main className="flex-1"><Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/products/suma" element={<Suma/>}/><Route path="/products/debrah" element={<Debrah/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/terms" element={<Terms/>}/></Routes></main><Footer/></div></I18nProvider>}
