import chicken from '../assets/mole chicken.jpeg'
import food from '../assets/food.jpeg'
import meat from '../assets/meat.jpeg'
import wing from '../assets/wing.jpeg'
import chicken2 from '../assets/chicken.jpeg'
import planeMeat from '../assets/plane meat.jpeg'
import wing2 from '../assets/wing 2.jpeg'
import pizzaHeart from '../assets/pizza heart.jpeg'

const images = [
  ['Molecule chicken', chicken],
  ['Food', food],
  ['Plain meat', meat],
  ['Chicken wings', wing],
  ['Chicken', chicken2],
  ['Plane meat', planeMeat],
  ['Chicken wings', wing2],
  ['Hearted pizza', pizzaHeart]
]

export default function Gallery() {
  return (
    <div className="blog">
      {images.map(([alt, src]) => (
        <figure key={src}>
          <img src={src} alt={alt} />
        </figure>
      ))}
    </div>
  )
}
