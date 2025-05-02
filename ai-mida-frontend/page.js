
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Mida AI</h1>
      <nav>
        <ul>
          <li><Link href="/signup">Signup</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  )
}
