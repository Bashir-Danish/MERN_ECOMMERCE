import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Wish() {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>    
        <main className='main'>
            wish
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Wish