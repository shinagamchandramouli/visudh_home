import React from 'react'
import { FeaturedProducts, Hero, Categories, Contact, PharmacyProducts } from '../components'

const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* <Categories /> */}
      <FeaturedProducts />
      <PharmacyProducts title = 'Lab Test'/>
      <PharmacyProducts title = 'Pharmacy'/>
      <PharmacyProducts title = 'Beauty Care'/>
      <PharmacyProducts title = 'Baby Needs'/>
      <Contact />
    </main>
  )
}

export default HomePage
