import Image from "next/image";

export default function List() {
  const 상품 = ["Tomatoes", "Pasta", "Chicken"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((productName, index) => (
        <div className="food" key={index}>
          <h4>{productName} $40</h4>
          <Image src="/food1.jpg" alt="음식" width={200} height={200} />
        </div>
      ))}
    </div>
  );
}
