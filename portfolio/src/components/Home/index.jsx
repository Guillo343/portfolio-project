import React, { useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['p', 'i', 'd', 'e', 'r', 'm', 'a', 'n'];
  const jobArray = ['w', 'e', 'b' , '' ,'d','e','v','e','l', 'o', 'p','e','r', '.']

  return (
    <div className='container home-page'>
        <div className="text-zone">
            <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="logo" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                web developer
            </h1>
            <h2>FrontEnd Developer </h2>
            <Link to='/contact' className='flat-button'> Contact Me </Link>
        </div>
    </div>
  )
}
