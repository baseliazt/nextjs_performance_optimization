"use client";
import * as React from "react";
import clsx from "clsx";
import ProductImageExample from "../fragments/critical/product_image/ProductImage.example";
import axios from "axios";
import { ENVIRONMENTS } from "@/core/constants";
import ProductNameExample from "../fragments/critical/product_name/ProductName.example";
import ProductDetailsExample from "../fragments/critical/product_details/ProductDetails.example";

export type Product = {
  id: number;

  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ExampleContainer() {
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${ENVIRONMENTS.API_URL}/products/1`);

      setProduct({
        id: response?.data?.id ?? -1,
        title: response.data?.title ?? "",
        description: response.data?.description ?? "",
        price: response?.data?.price ?? -1,
        category: response.data?.category ?? "",
        image: response.data?.image ?? "",
        rating: response.data?.rating ?? {
          rate: -1,
          count: -1,
        },
      });
    };

    fetchData();
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={clsx("w-full")}>
      {/* Critical Components */}
      <ProductImageExample imageUrl={product.image} />
      <ProductNameExample name={product.title} />
      <ProductDetailsExample description={product.description} />
      {/* Non Critical */}
      {/* <ReviewsSection />
      <RelatedProducts /> */}
    </div>
  );
}
