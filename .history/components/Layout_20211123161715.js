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
            <h2>...may the best drag queen win</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 If you can't love yourself, how the hell you gonna love someone else?!</p>
      </footer>
    </div>
  )
}