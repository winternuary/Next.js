"use client";

import Image from "next/image";
import { useState } from "react";

export default function List() {
  const 상품 = [
    { name: "Tomatoes", image: "food1.jpg" },
    { name: "Pasta", image: "food2.jpg" },
    { name: "Chicken", image: "food3.jpg" },
  ];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>

      <span>{수량[0]}</span>
      <button
        onClick={() => {
          let copy = [...수량]; // 독립적인 array 만들어서 복사해줌
          copy[0]++;
          수량변경(copy);
        }}
      >
        +
      </button>
      <span>{수량[1]}</span>
      <button
        onClick={() => {
          let copy = [...수량]; // 독립적인 array 만들어서 복사해줌
          copy[1]++;
          수량변경(copy);
        }}
      >
        +
      </button>
      <span>{수량[2]}</span>
      <button
        onClick={() => {
          let copy = [...수량]; // 독립적인 array 만들어서 복사해줌
          copy[2]++;
          수량변경(copy);
        }}
      >
        +
      </button>

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
        </div>
      ))}
    </div>
  );
}
