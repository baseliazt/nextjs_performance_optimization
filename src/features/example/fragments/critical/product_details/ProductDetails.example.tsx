import * as React from "react";

export interface IProductDetailsExampleProps {
  description?: string;
}

export default function ProductDetailsExample({
  description = "",
}: IProductDetailsExampleProps) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
