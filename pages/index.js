
import Link from 'next/link'
const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link href="/products">Product</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
    </div>
  )
}

export default Home