// Components
import Hero from '@/components/hero/hero'
import Sponsors from '@/components/sponsors/sponsors'
import About from '@/components/about/about'
import Programs from '@/components/programs/programs'
import Team from '@/components/team/team'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <About />
      <Programs />
      <Team />
      <Sponsors />
      <Footer />
    </main>
  )
}
