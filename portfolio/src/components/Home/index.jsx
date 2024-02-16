import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

export const Home = () => {
  return (
    <div className='container home-page'>
        <div className="text-zone">
            <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="logo" />
                piderman
                <br />
                web developer
            </h1>
            <h2>FrontEnd Developer </h2>
            <Link to='/contact' className='flat-button'> Contact Me </Link>
        </div>
    </div>
  )
}
