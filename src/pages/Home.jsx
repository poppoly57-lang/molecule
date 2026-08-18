import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import MenuList from '../components/MenuList'
import banner from '../assets/barner.png'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero-simple">
          <img src={banner} className="barn" alt="Molecule Restaurant" />
        </section>
      
        <Gallery />
        <MenuList />

        <section id="location" className="location-placeholder">
          <h2 className="section-title">Hours &amp; Location</h2>
          <p className="section-sub">Add your restaurant address, opening hours and map here.</p>
        </section>

        <section id="contact" className="contact-placeholder">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-sub">Add your phone number, email and contact form here.</p>
        </section>

        <section id="order" className="order-placeholder">
          <h2 className="section-title">Order Now</h2>
          <p className="section-sub">Connect this section to your ordering system when ready.</p>
        </section>
      </main>

      <Footer />
    </>
  )
}
