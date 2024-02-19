export default function cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Cartlist item={장바구니[0]} />
      <Cartlist />
      <Cartlist />
    </div>
  );
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
