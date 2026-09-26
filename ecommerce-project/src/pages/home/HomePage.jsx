import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../compnonents/Header";
import { ProductsGrid } from "../ProductsGrid";
import homeFavicon from "../../assets/images/home-favicon.png";

export function HomePage({ cart }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href={homeFavicon} />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
