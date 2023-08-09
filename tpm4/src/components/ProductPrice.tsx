"use client";

import { useEffect, useState } from "react";
import { Product } from "../../model/products";

const ProductPrice = ({id}: { id: number}) => {

    const [price, setPrice] = useState(0)

    useEffect(() => {
        const getProduct = async () => {
            const data: Product = await fetch(
              `https://fakestoreapi.com/products/${id}`
            ).then((r) => r.json());
            setPrice(data.price)
        }

        getProduct()
    }, [id])

  return (
    <p className="bg-blue-500 px-3 rounded-xl">
      {price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </p>
  );
};

export default ProductPrice;
