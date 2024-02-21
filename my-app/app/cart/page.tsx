export default function cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Cartlist item={장바구니[0]} />
      <Cartlist item={장바구니[1]} />
      <Banner content="롯데카드" color="red" />
      <Btn color="red" />
    </div>
  );
}

function Banner(props: { content?: string; color: string }) {
  return <h5 style={{ color: props.color }}>{props.content} 결제 행사 중</h5>;
}

function Cartlist(props: { item?: string }) {
  return (
    <div>
      <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}

function Btn(props: { color: string }) {
  return <button style={{ background: props.color }}>버튼입니다.</button>;
}
