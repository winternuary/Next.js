import Link from "next/link";

export default function cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <Link href="/cart/payment">
        <button className="cartBtn">결제 하기</button>
      </Link>
      <p>현대카드 결제시 무이자 이벤트</p>
    </div>
  );
}
