import Header from '../components/Header';
import Footer from '../components/Footer';
import molecule from '../assets/molecule.png';
import "../styles.css";

export default function About() {
  return (
    <>
      <Header />

      <main
        className="about-page"
        style={{ backgroundImage: `url(${molecule})` }}
      >
        <section className="about-container">
          <h1 className="about-title">ABOUT US</h1>
          <h2 className="about-subtitle">
            More Than Just <br />
            <span>A Bar and Restaurant</span>
          </h2>
          <p>
            At Molecule, we believe great food, exceptional drinks, and good
            company bring people together. Our mission is to create a space
            where every visit is an experience, where the art of mixology meets
            the science of flavor, and where every detail is crafted to delight
            your senses.
          </p>
          <p>
            Our bar and restaurant is a place where flavour meets the
            atmosphere — from handcrafted cocktails and carefully selected
            wines to seasonal dishes made with the finest ingredients.
          </p>
          <p>
            We are not just a place to eat and drink, we are a place to unwind,
            connect, and create memories.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}