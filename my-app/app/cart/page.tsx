import Link from "next/link";
export default function cart() {
  return (
    <div>
      <h2 className="cart">장바구니 입니다</h2>
      <Link href="/cart/payment">
        <button className="cartBtn">결제 하기</button>
      </Link>
      <p>현대카드 결제시 무이자 이벤트</p>
    </div>
  );
}
