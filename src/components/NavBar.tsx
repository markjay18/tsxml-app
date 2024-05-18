import React, { useState, ChangeEvent } from 'react';
import Logo from '../assets/img/Logo.png'
import '../App.css'
import '../index.css'

//PascalCasing recommend to use by developers
const NavBar = () => {
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
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeLinkId, setActiveLinkId] = useState<string>('');

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setActiveLinkId(id); // Set the id of the clicked element to activeLinkId
  };
  return ( 
  <>
 <div className="modal fade custom-modal" id="menu" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"> <img src={Logo} alt="Logo" className = "Logo" /> <span className='logofont'>MJLAJADA</span></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row d">
                <div className="col-4 col-sm-6">
                  <a className="nav-link px-3" aria-current="page" href="#vi" onClick={() => scrollToTarget('services')} data-bs-dismiss="modal">
                    <span className={activeLinkId === 'services' ? 'clicked' : ''}>Services</span></a>
                </div>

                <div className="col-4 col-sm-6">
                  <a className="nav-link px-3" aria-current="page" href="#careers" onClick={() => scrollToTarget('career')} data-bs-dismiss="modal">
                    <span className={activeLinkId === 'career' ? 'clicked' : ''}>Career</span></a>
                </div>                      
              </div>
              <div className="row d">
                <div className="col-4 col-sm-6">
                  <a className="nav-link px-3" aria-current="page" href="#projects" onClick={() => scrollToTarget('project')} data-bs-dismiss="modal">
                    <span className={activeLinkId === 'project' ? 'clicked' : ''}>Projects</span></a>
                </div>

                <div className="col-4 col-sm-6">
                  <a className="nav-link px-3" aria-current="page" href="#contact" onClick={() => scrollToTarget('vii')} data-bs-dismiss="modal">
                    <span className={activeLinkId === 'vii' ? 'clicked' : ''}>Contact</span></a>
                </div>                      
              </div>
              <hr className='mhr' />
              <div className="row d">
                <div className="col-5 col-sm-6">
                  <a className="nav-link px-3" aria-current="page" href="https://github.com/markjay18" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github font bi1" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                         <span> Github</span>
                  </a>
                </div> 

                <div className="col-5 col-sm-6">
                  <a className="nav-link px-3" aria-current="page" href="https://t.me/mjladz" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telegram font bi1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                        </svg>
                         <span> Telegram</span>
                  </a>
                </div>                      
              </div>
              <hr className='mhr'/>
              <div className="row d">
                <div className="col-4 col-sm-6">
                  <div className="nav-item d-flex mx-2 f" role="makin">
                    <label className="switch">
                       <input type="checkbox" id="modeSwitch1" onChange={ToggleTheme} defaultChecked={ SelectedTheme === 'dark' } />
                       <span className="slider round"></span> 
                    </label>
                  </div>
                </div>                 
              </div>
            </div>
        </div>
    </div>
  </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">     
      <div className="container">
        <a className="navbar-brand" href="#top" onClick={() => scrollToTarget('top') }><img src={Logo} alt="Logo" className = "Logo" /> <span className='logofont'>MARKJAY</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
            <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#services" onClick={() => scrollToTarget('services')}>
                <span className={activeLinkId === 'services' ? 'clicked' : ''}>Services</span></a> 
            </li>
            <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#career" onClick={() => scrollToTarget('career')}>
                  <span className={activeLinkId === 'career' ? 'clicked' : ''}>Career</span></a>
            </li>
            <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#projects" onClick={() => scrollToTarget('project')}>
                  <span className={activeLinkId === 'project' ? 'clicked' : ''}>Projects</span></a>
            </li>
            <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#contact" onClick={() => scrollToTarget('vii')}>
                  <span className={activeLinkId === 'vii' ? 'clicked' : ''}>Contact</span></a>
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
  </>
  )
}

export default NavBar;