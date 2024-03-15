import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/shared/Footer'

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}
