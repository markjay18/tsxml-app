import React, { useRef } from 'react';
import MySQL from '../assets/img/mysql.svg'
import HTML from '../assets/img/html5.svg'
import CSS from '../assets/img/css3.svg'
import Bootstrap from '../assets/img/bootstrap.svg'
import PHP from '../assets/img/php.svg'
import JS from '../assets/img/js.svg'
import JQUERY from '../assets/img/jquery.svg'
import ReactJS from '../assets/img/react.svg'
import NodeJS from '../assets/img/nodejs.svg'
import Python from '../assets/img/py.svg'
import Git from '../assets/img/git.svg'

const Skills = () => {
    const listRef = useRef<HTMLDivElement>(null);
  
    const itemWidth = 150;
    const padding = 10;
  
    const handlePrevClick = () => {
      if (listRef.current) {
        listRef.current.scrollBy({
            left: -(itemWidth + padding),
            behavior: 'smooth' // Enable smooth scrolling
        });
      }
    };
  
    const handleNextClick = () => {
      if (listRef.current) {
        listRef.current.scrollBy({
            left: itemWidth + padding,
            behavior: 'smooth' // Enable smooth scrolling
        });
      }
    };
    return (
    <div className='container-fluid cbg'>
        <div className="carousel-view">
            <button id="prev-btn" className="prev-btn" onClick={handlePrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                </svg>
            </button>
                <div id="item-list" className="item-list" ref={listRef}>
                <div className="item-container">
                  <img id="item" className="item" src={MySQL}/>
                  <p className="item-text">MySQL</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={HTML}/>
                  <p className="item-text">HTML</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={CSS}/>
                  <p className="item-text">CSS</p>
                </div> 
                <div className="item-container">
                  <img id="item" className="item" src={Bootstrap}/>
                  <p className="item-text">Bootstrap</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={PHP}/>
                  <p className="item-text">PHP</p>
                </div>                   
                <div className="item-container">
                  <img id="item" className="item" src={JS}/>
                  <p className="item-text">JavaScript</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={JQUERY}/>
                  <p className="item-text">JQuery</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={ReactJS}/>
                  <p className="item-text">ReactJS</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={NodeJS}/>
                  <p className="item-text">NodeJS</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={Python}/>
                  <p className="item-text">Python</p>
                </div>
                <div className="item-container">
                  <img id="item" className="item" src={Git}/>
                  <p className="item-text">Git</p>
                </div>
                </div>
            <button id="next-btn" className="next-btn" onClick={handleNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                </svg>
            </button>
        </div>
    </div>        
    )
}

export default Skills;