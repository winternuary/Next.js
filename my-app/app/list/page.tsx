import Image from "next/image";

export default function List() {
  const 상품 = [
    { name: "Tomatoes", image: "food1.jpg" },
    { name: "Pasta", image: "food2.jpg" },
    { name: "Chicken", image: "food3.jpg" },
  ];

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
        </div>
      ))}
    </div>
  );
}
