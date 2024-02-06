import Link from "next/link"

export default function Home() {
  let name = 'kim'
  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
      </div>
      <h4 className="title">로켓 쿠팡</h4>
      <p className="title-sub">by {name}</p>
    </div>
  );
}

