import Image from "next/image";

export default function list() {
  const 상품 = ["Tomatoes", "Pasta", "Chicken"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((index) => {
        return (
          <div className="food">
            <h4>{index} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
