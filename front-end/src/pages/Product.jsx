import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Product() {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>    
        <main className='main'>
            Product
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Product