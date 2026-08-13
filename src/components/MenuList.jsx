import { menuItems } from '../data/menu'

export default function MenuList() {
  return (
    <section id="menu" className="our-menu">
      <h2 className="section-title">Signature Mains</h2>

      {menuItems.map(item => (
        <div className="menu-item" key={item.name}>
          <div className="item-header">
            <span className="item-name">{item.name}</span>
            <span className="spacer"></span>
            <span className="price">{item.price}</span>
          </div>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </section>
  )
}
