import Image from "next/image";

export default function list() {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $50</h4>
      </div>
    </div>
  );
}
