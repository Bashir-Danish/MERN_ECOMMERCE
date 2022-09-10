import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Login() {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>    
        <main className='main'>
            login
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Login