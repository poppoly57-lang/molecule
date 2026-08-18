import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Molecule Restaurant home">
        <img src={logo} className="log" alt="Molecule Restaurant logo" />
      </Link>

      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/Home" className="links" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/menu" className="links" onClick={closeMenu}>Our Menu</Link></li>
          <li><Link to="/about" className="links" onClick={closeMenu}>About</Link></li>
          <li><a href="/#contact" className="links" onClick={closeMenu}>Contact Us</a></li>
          <li><a href="/#location" className="links" onClick={closeMenu}>Hours &amp; Location</a></li>
          <li><a href="/#order" className="links links-cta" onClick={closeMenu}>Order Now</a></li>
        </ul>
      </nav>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}
