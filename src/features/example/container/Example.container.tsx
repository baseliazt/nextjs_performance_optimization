"use client";
import * as React from "react";
import clsx from "clsx";
import ProductImageExample from "../fragments/critical/product_image/ProductImage.example";
import axios from "axios";
import { ENVIRONMENTS } from "@/core/constants";

export type Product = {
  imageUrl: string;
};

export default function ExampleContainer() {
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${ENVIRONMENTS.API_URL}/products/1`);
      setProduct({
        imageUrl: response.data?.image,
      });
    };

    fetchData();
  }, []);
  if (!product) {
    return null;
  }
  return (
    <div className={clsx("w-full")}>
      {/* Critical Components */}
      <ProductImageExample imageUrl={product?.imageUrl} />
    </div>
  );
}
