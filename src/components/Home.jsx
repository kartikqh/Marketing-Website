import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import FreqAskedQues from './FreqAskedQues'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import Loader from './Loader'

const Home = () => {
  return (
    <>
      <Loader />
      <div className="container min-w-full min-h-lvh secondary-font">
        <NavBar />
        <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#F8F8FE] border-b border-purple-100">
          <Hero />
        </section>
        <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-purple-100">
          <About />
        </section>
        <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F8F8FE] border-b border-purple-100">
          <Services />
        </section>
        <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-purple-100">
          <Portfolio />
        </section>
        <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F8F8FE] border-b border-purple-100">
          <FreqAskedQues />
        </section>
        <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-purple-100">
          <Clients />
        </section>
        <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F8F8FE] border-b border-purple-100">
          <Contact />
        </section>
        <section  className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-purple-100">
          <Newsletter />
        </section>
        <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F8F8FE] border-b border-purple-100">
          <Footer />
        </section>
        <FloatingActions />
      </div>
    </>
  )
}

export default Home