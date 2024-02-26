import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  let userParam = useParams();
  let productId = userParam.id;
  let [productDetails, setProductDetails] = useState({});
  let [productImages, setProductImages] = useState([]);
  let [singleImage, setSingleImage] = useState("");


  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setProductDetails(finalRes);
        setProductImages(finalRes.images);
        setSingleImage(finalRes.thumbnail);
      });
  }, [productId]);

  return (
    <>
      <div className=" py-4 text-center font-bold bg-indigo-200 text-[30px]">
        {productDetails.title}
      </div>
      <div className=" max-w-[1320px]  py-10 mx-auto grid lg:grid-cols-2 gap-10" >
        <div className="">
          {
            setSingleImage!=="" ?
            <img className=" w-[100%] h-[400px] " src={singleImage} />
            :
            ' '
          };
         
          <div className=" flex gap-[10px] py-3 ">

            {productImages.map((images, i) => {
              return (
                <div>
                  <img className="h-[100px] basis-[25%] border border-yellow-800" src={images} onClick={()=> setSingleImage(images)} key={i} />
                </div>
              )
            })
            }

          </div>
        </div>
        <div>
          <h1 className=" text-3xl  font-bold  "> {productDetails.title}</h1>
          <p> {productDetails.category} </p>
          <h2 className=" text-xl py-1">Rs. {productDetails.price}</h2>
          <p className=" py-3 "> {productDetails.description}</p>
        </div>
      </div>

      <Link to={"/"} className="mx-auto table bg-[lightBlue] p-[10px]">
        Back Home
      </Link>
    </>
  );
}
