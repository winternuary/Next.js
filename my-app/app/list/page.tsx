"use client";

import Image from "next/image";
import { useState } from "react";

export default function List() {
  const 상품 = [
    { name: "Tomatoes", image: "food1.jpg" },
    { name: "Pasta", image: "food2.jpg" },
    { name: "Chicken", image: "food3.jpg" },
  ];
  let [수량, 수량변경] = useState(0);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((product, index) => (
        <div className="food" key={index}>
          <h4>{product.name} $40</h4>
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={200}
            height={200}
          />
          <span>{수량}</span>
          <button
            onClick={() => {
              수량변경(수량 + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              수량변경(수량 - 1);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
