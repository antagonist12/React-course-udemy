import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";
// import Helloworld from "../Components/Helloworld";
// import Counterexample from "../Components/Counterexample";

function Home() {
  const url = `https://5f7991bde402340016f931cb.mockapi.io/Products?page=1&limit=10`;

  // Custom Hook, Karena kode ini dipanggil berulang di homepage dan product
  // yang membedakan hanya variabel pada statenya saja
  let products = useAxiosGet(url);

  let content = null;

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <p>There was an error please try again later.</p>;
  }

  if (products.data) {
    content = products.data.map((products) => (
      <div key={products.id}>
        <ProductCard product={products} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Products</h1>
      {/* <Helloworld />
      <Counterexample /> */}
      {content}
    </div>
  );
}

export default Home;
