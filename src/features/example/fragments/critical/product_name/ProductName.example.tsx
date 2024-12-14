import * as React from "react";
import clsx from "clsx";

export interface IProductNameExampleProps {
  name?: string;
}

export default function ProductNameExample({
  name = "",
}: IProductNameExampleProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
