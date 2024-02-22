import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  let [products,setproducts] = useState([]);
  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((resFinal) => {
        setproducts(resFinal.products);
      })
      .catch((error) => {
       
      });
  };

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div>
      <h1 className="text-[30px] text-center py-6 font-bold ">Our Products</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-w-[1320px] mx-auto gap-5">
        {products.length > 1 ? (
          products.map((items, index) => {
           return <ProductCard items={items} key={index} />;
          })
        ) : (
          <div> Loading......</div>
        )}
      </div>
    </div>
  );
}

function ProductCard({items}) {
  return (
    <div className=" shadow-lg ">
      <Link to={`/products/${items.id}`}>
      <img
        className=" w-[100%] h-[230px] "
        src={items.thumbnail}
      />
      <h3 className="text-center py-3 bg-slate-400 text-yellow-100 font-bold">
        {" "}
        {items.title}
      </h3>
      </Link>
     

    </div>
  );
}
export default App;
