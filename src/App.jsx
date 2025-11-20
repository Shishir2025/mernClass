import React from 'react'
import Head from './assets/pages/Head'
import Type from './assets/pages/Type'
import Colorbox from './assets/pages/Colorbox'
import Respon from './assets/pages/Respon'

import Containers from './assets/pages/Containers'
import Color from './assets/pages/Color'
import Carbox from './assets/pages/Carbox'
import Table from './assets/pages/Table'
import Formlist from './assets/pages/Formlist'
import Bar from './assets/pages/Bar'
import Slideshow from './assets/pages/Slideshow'
import Footer from './assets/pages/Footer'
import Navigation from './assets/pages/Navigation'
import Accordins from './assets/pages/Accordins'

const App = () => {
  return (
    <div>
      <Head />
      <main className=' mx-3'>
        <Type />
        <Colorbox />
        <Respon />

        <Containers />
        <Color />

        <Carbox />
        <Table />
        <Formlist />
        <Bar />
        <Slideshow />
        <Navigation />
        <Accordins />

        <Footer />


      </main>





    </div>
  )
}

export default App