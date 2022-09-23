import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div className='intro-container'>
            <div className="i-row">
                <div className="i-col">
                    <h2 className="i-title">
                        Fashion Foever
                    </h2>
                    <p className='i-subtitle'>Thoughts , reviews and ideas sinve 2022.</p>
                    <Link to="/shop" className='i-shopbtn'>Shop Now</Link>
                </div>
                <div className="i-colArrow">
                    <a href="#blog"><FontAwesomeIcon icon={faChevronDown} /></a>
                </div>
            </div>

        </div>
    )
}

export default Intro