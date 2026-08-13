import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuList from '../components/MenuList'

export default function Menu() {
  return (
    <>
      <Header />
      <main className="page-content">
        <MenuList />
      </main>
      <Footer />
    </>
  )
}
