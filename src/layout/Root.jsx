import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'

export default function Root() {
  return (
    <div className="bg-[#030317] text-white">
      <Header />
      <main>
        <section className="container">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  )
}
