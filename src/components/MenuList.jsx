import { menuItems } from '../data/menu'

export default function MenuList() {
  return (
    <section id="menu" className="our-menu">
      <h2 className="section-title">Signature Mains</h2>

      <div className="restaurant-item-grid">
        {menuItems.map(item => (
          <article className="restaurant-item-card" key={item.name}>
            <img className="restaurant-item-card__image" src={item.image} alt={item.name} />
            <div className="restaurant-item-card__content">
              <div className="restaurant-item-card__header">
                <h3 className="restaurant-item-card__name">{item.name}</h3>
                <span className="restaurant-item-card__price">{item.price}</span>
              </div>
              <p className="restaurant-item-card__description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
