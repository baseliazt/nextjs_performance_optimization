import * as React from "react";
import Image from "next/image";

export interface ProductImageExampleProps {
  imageUrl?: string;
}

export default function ProductImageExample({
  imageUrl = "",
}: ProductImageExampleProps) {
  return (
    <div>
      <Image src={imageUrl} alt="Product Image" width={300} height={300} />
    </div>
  );
}
