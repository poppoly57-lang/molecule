import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <h1>GET IN TOUCH</h1>
      <p>
        Ready to taste the experiment? View our{' '}
        <Link className="menu-link" to="/menu">Menu</Link>
        {' '}or{' '}
        <a className="reserve-btn" href="#reserve">Reserve Your Table →</a>
      </p>
    </footer>
  )
}
