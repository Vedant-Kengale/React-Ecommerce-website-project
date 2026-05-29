import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "A premium audio experience with an elegant design and powerful bass.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Discover the latest smartwatch essentials with smart tracking and style.",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleOrderPopup = (product = null) => {
    setSelectedProduct(product);
    setOrderPopup((prev) => !prev);
  };

  const handleProductOrder = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  React.useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", delay: 120, once: true, offset: 120 });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar handleOrderPopup={() => handleOrderPopup(null)} />
      <main className="space-y-24 py-6">
        <Hero handleOrderPopup={() => handleOrderPopup(null)} heroImage={headphone} />
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData} />
        <Products handleProductOrder={handleProductOrder} />
        <Banner data={BannerData2} />
        <Blogs />
        <Partners />
      </main>
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={() => handleOrderPopup(null)} selectedProduct={selectedProduct} />
    </div>
  );
};

export default App;
