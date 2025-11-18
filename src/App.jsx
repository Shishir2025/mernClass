import React from 'react'
import Head from './assets/pages/Head'
import Type from './assets/pages/Type'
import Colorbox from './assets/pages/Colorbox'
import Respon from './assets/pages/Respon'

const App = () => {
  return (
    <div>
      <Head />
      <main className=' mx-3'>
        <Type />
        <Colorbox />
        <Respon />


      </main>





    </div>
  )
}

export default App