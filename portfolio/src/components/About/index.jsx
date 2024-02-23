import React, {useState, useEffect} from 'react'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                idx={15}/>
            </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et soluta eveniet ullam perspiciatis aperiam ut odit, maxime dicta blanditiis deserunt dolor nemo sed nesciunt assumenda quis amet eligendi praesentium?</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam, excepturi ipsam officia at, praesentium, minima totam assumenda fugiat eius voluptatum esse tempore? Earum cumque quo molestias quidem id praesentium.</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet rem, sed officiis sequi tempore dolor temporibus voluptate, error accusantium inventore iusto porro provident commodi voluptates iste sit doloremque rerum!</p>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#DD0031'/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#DD0031'/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color='#DD0031'/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color='#DD0031'/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color='#DD0031'/>
                </div>
            </div>
        </div>
    </div>
  )
}
