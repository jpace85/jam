import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>My favourite</span>
              <span>Drag Queens</span>
            </h1>
            <h2>Now don't </h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  )
}