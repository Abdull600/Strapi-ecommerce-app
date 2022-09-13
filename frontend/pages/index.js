import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import Layout from "./components/Layout";
import StrapiClient from "../lib/strapi-client";

function App({ product }) {
  const [cartItems, setCartItems] = useState([]);
  const { products } = product;
  const onAddHandler = (product) => {
    const isInCart = cartItems.find((x) => x.id === product._id);
    if (isInCart) {
      const newCartItems = cartItems.map((x) =>
        x.id === product._id ? { ...isInCart, qty: isInCart.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };
  const onRemoveHandler = (product) => {
    const isInCart = cartItems.find((x) => x.id === product._id);
    if (isInCart.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product._id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product._id ? { ...isInCart, qty: isInCart.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };
  return (
    <Layout title="All products">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main
          cartItems={cartItems}
          onAddHandler={onAddHandler}
          onRemoveHandler={onRemoveHandler}
          products={products}
        />
        <Basket
          cartItems={cartItems}
          onAddHandler={onAddHandler}
          onRemoveHandler={onRemoveHandler}
        />
      </div>
    </Layout>
  );
}

const client = new StrapiClient();

export const getStaticProps = async () => {
  const allProducts = await client.fetchData("/product");
  return {
    props: {
      product: allProducts,
    },
  };
};
export default App;
