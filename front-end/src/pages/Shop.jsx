import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ShopBody from '../components/ShopBody'

function Shop() {
  return (
    <div className='wrapper'>
    <header className='header'>
        <Header/>
    </header>    
    <main className='main'>
        <ShopBody/>
    </main>
    <footer className='footer'>
        <Footer/>
    </footer>
</div>
  )
}

export default Shop