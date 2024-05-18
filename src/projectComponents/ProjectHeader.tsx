import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png'

const ProjectHeader = () => {
    const SetDarkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'dark')
        localStorage.setItem('SelectedTheme', 'dark')
      }
      const SetLightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'light')
        localStorage.setItem('SelectedTheme', 'light')
      }
      const SelectedTheme = localStorage.getItem('SelectedTheme')
      const updateThemeCheckboxes = (isChecked: boolean) => {
        const modeSwitch = document.getElementById('modeSwitch') as HTMLInputElement;
        const modeSwitch1 = document.getElementById('modeSwitch1')as HTMLInputElement ;
        
        if (modeSwitch) modeSwitch.checked = isChecked;
        if (modeSwitch1) modeSwitch1.checked = isChecked;
      }
      if (SelectedTheme === 'dark') {
        SetDarkMode();
        updateThemeCheckboxes(true);
      } else {
        updateThemeCheckboxes(false);
      }
      const ToggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) SetDarkMode();
        else SetLightMode(); 
        updateThemeCheckboxes(isChecked);
      }
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">     
      <div className="container">
        <Link to="/" className='txt'>
            <img src={Logo} alt="Logo" className = "Logo" /> <span className='logofont log'>MARKJAY</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
            <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="">
                <span></span></a> 
            </li>
          </ul>
            <div className="nav-item d-flex mx-1" role="github">
              <a className="nav-link active" aria-current="page" href="https://github.com/markjay18" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github font bi1" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              </a>
            </div>
            <hr className="mx-2 h" />
          <div className="nav-item d-flex mx-2 f" role="makin">
            <label className="switch">
               <input type="checkbox" id="modeSwitch" onChange={ToggleTheme} defaultChecked={ SelectedTheme === 'dark' } />
               <span className="slider round"></span> 
            </label>
          </div>
        </div>
      </div>
    </nav> 
    )
}

export default ProjectHeader;