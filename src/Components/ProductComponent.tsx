"use client";
import ProductIsr from "@/app/products/[...productId]/ProductIsr";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductComponent = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const stringProductData = searchParams.get("data");
  console.log(stringProductData);
  const productData = stringProductData
    ? JSON.parse(decodeURIComponent(stringProductData))
    : null;
  console.log(productData);

  return <ProductIsr productData={productData} />;
};

export default ProductComponent;
