import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { menuItems } from '../data/menu'

const initialForm = {
  name: '',
  phone: '',
  item: menuItems[0].name,
  quantity: 1,
  instructions: '',
  orderType: 'Dine-in',
  address: '',
  time: ''
}

const priceFor = item => Number(item.price.replace(/[^0-9]/g, ''))

export default function Order() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const selectedItem = menuItems.find(item => item.name === form.item) || menuItems[0]
  const total = priceFor(selectedItem) * Number(form.quantity)

  const updateField = event => {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }))
    setSubmitted(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="order-page">
        <div className="order-page__intro">
          <p className="order-page__eyebrow">Made to your moment</p>
          <h1>Order Now</h1>
          <p>Choose your favourite, tell us how you want it, and we&apos;ll take care of the rest.</p>
        </div>

        <div className="order-page__layout">
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="order-form__section">
              <p className="order-form__step">01 / Your details</p>
              <div className="order-form__row">
                <label className="order-form__field">Customer Name<input name="name" value={form.name} onChange={updateField} required /></label>
                <label className="order-form__field">Phone Number<input type="tel" name="phone" value={form.phone} onChange={updateField} required /></label>
              </div>
            </div>

            <div className="order-form__section">
              <p className="order-form__step">02 / Build your order</p>
              <div className="order-form__choices">
                {menuItems.map(item => (
                  <label className={`order-item ${form.item === item.name ? 'order-item--selected' : ''}`} key={item.name}>
                    <input type="radio" name="item" value={item.name} checked={form.item === item.name} onChange={updateField} />
                    <img src={item.image} alt="" />
                    <span><strong>{item.name}</strong><small>{item.price}</small></span>
                  </label>
                ))}
              </div>
              <label className="order-form__field order-form__quantity">Quantity<input type="number" name="quantity" min="1" max="20" value={form.quantity} onChange={updateField} required /></label>
              <label className="order-form__field">Special instructions <span>(optional)</span><textarea name="instructions" value={form.instructions} onChange={updateField} rows="3" /></label>
            </div>

            <div className="order-form__section">
              <p className="order-form__step">03 / Delivery details</p>
              <fieldset className="order-form__types">
                <legend>Order type</legend>
                {['Dine-in', 'Takeaway', 'Delivery'].map(type => (
                  <label key={type}><input type="radio" name="orderType" value={type} checked={form.orderType === type} onChange={updateField} />{type}</label>
                ))}
              </fieldset>
              {form.orderType === 'Delivery' && <label className="order-form__field">Delivery location / address<input name="address" value={form.address} onChange={updateField} required /></label>}
              <label className="order-form__field">Preferred time<input type="time" name="time" value={form.time} onChange={updateField} required /></label>
            </div>
            <button className="order-form__submit" type="submit">Place Order <span>→</span></button>
            {submitted && <p className="order-form__success" role="status">Thanks, {form.name || 'your order'} is being prepared.</p>}
          </form>

          <aside className="order-summary">
            <p className="order-summary__label">Your selection</p>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <div className="order-summary__line"><span>Price</span><strong>{selectedItem.price}</strong></div>
            <div className="order-summary__line"><span>Quantity</span><strong>{form.quantity}</strong></div>
            <div className="order-summary__total"><span>Total</span><strong>UGX {total.toLocaleString('en-US')}</strong></div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}