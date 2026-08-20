import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const updateField = event => {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }))
    setSubmitted(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="contact-page__intro">
          <p className="contact-page__eyebrow">The Molecule experience</p>
          <h1>Contact Us</h1>
          <p>Have a question, a special request, or a story to share? We would love to hear from you.</p>
        </div>

        <div className="contact-page__layout">
          <aside className="contact-page__details">
            <p className="contact-page__label">Come by, call, or write</p>
            <h2>Let&apos;s start a conversation.</h2>
            <dl>
              <div><dt>Phone</dt><dd>+256 700 000 000</dd></div>
              <div><dt>Email</dt><dd>hello@molecule.restaurant</dd></div>
              <div><dt>Location</dt><dd>Kampala, Uganda</dd></div>
              <div><dt>Opening hours</dt><dd>Mon - Sun, 11:00 - 23:00</dd></div>
            </dl>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label className="contact-form__field">
                Full Name
                <input className="contact-input" name="name" value={form.name} onChange={updateField} required />
              </label>
              <label className="contact-form__field">
                Email Address
                <input className="contact-input" type="email" name="email" value={form.email} onChange={updateField} required />
              </label>
            </div>
            <div className="contact-form__row">
              <label className="contact-form__field">
                Phone Number
                <input className="contact-input" type="tel" name="phone" value={form.phone} onChange={updateField} required />
              </label>
              <label className="contact-form__field">
                Subject
                <input className="contact-input" name="subject" value={form.subject} onChange={updateField} required />
              </label>
            </div>
            <label className="contact-form__field">
              Message
              <textarea className="contact-input contact-textarea" name="message" value={form.message} onChange={updateField} rows="5" required />
            </label>
            <button className="contact-form__submit" type="submit">Send message</button>
            {submitted && <p className="contact-form__success" role="status">Thank you. Your message has been received.</p>}
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}