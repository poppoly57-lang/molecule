import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-container">
          <h1>ABOUT US</h1>
          <h2>Where science meets senses</h2>
          <p>
            At Molecule, every pour, plate, and puff of smoke is an experiment in flavor.
            We're not just a bar—we're a laboratory of taste, where classic mixology
            collides with modern gastronomy to create something you can't find anywhere else.
          </p>

          <h1>OUR STORY</h1>
          <p>
            Molecule was born from a simple obsession: what happens when you treat a cocktail
            like a chemistry experiment? Our founders, equal parts bartenders and food
            scientists, set out to build a space where nitrogen mist, edible spheres, and
            aromatic smoke aren't gimmicks, but tools for telling a story in every glass.
            The name "Molecule" reflects our belief that the smallest details—a single infused
            droplet, a precise temperature, a burst of aroma—are what transform a drink or
            dish from good to unforgettable.
          </p>

          <h1>OUR PHILOSOPHY</h1>
          <p>
            We call ourselves a "Gastro Air Bar" because we treat air, smoke, and aroma as
            ingredients just as important as spirits and spice. Expect:
          </p>
          <ul className="about-list">
            <li>"Molecular mixology" — foams, spherification, smoked infusions, and liquid nitrogen theatrics</li>
            <li>"Small-format gastronomy" — bites and plates designed to pair precisely with each drink</li>
            <li>"Sensory-first presentation" — we design for scent and visual impact as much as taste</li>
          </ul>
          <p>
            This isn't just about looking impressive (though it does); it's about layering
            flavor and experience in a way traditional bars can't.
          </p>

          <h1>THE CRAFTSMANSHIP</h1>
          <p>
            Behind every dish and drink is a team trained at the intersection of culinary arts
            and cocktail science. Our mixologists and chefs work side by side, treating the bar
            like an open kitchen so you can watch the smoke roll and the spheres form right in front of you.
          </p>

          <h1>THE ATMOSPHERE</h1>
          <p>
            Warm amber light, the glow of candlelight, walls lined with rare spirits, and the
            quiet theater of a drink being made — Molecule is designed for slow evenings,
            celebrations, and conversations that linger.
          </p>

          <h1>WHAT TO EXPECT</h1>
          <ul className="about-list">
            <li>Signature molecular cocktails crafted table-side</li>
            <li>A curated small-plates menu designed to pair with our drinks</li>
            <li>An ever-evolving seasonal menu — new "experiments" added regularly</li>
            <li>Intimate seating ideal for date nights, celebrations, and private gatherings</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  )
}
