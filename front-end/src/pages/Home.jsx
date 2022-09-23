import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBlog from '../components/HomeBlog'
import Intro from '../components/Intro'
import NewProducts from '../components/NewProducts'

function Home() {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>    
        <main className='main'>
            <Intro/>
            <NewProducts/>
            <HomeBlog/>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Home