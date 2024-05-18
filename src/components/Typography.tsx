import React, { useState } from 'react';
import Profile from '../assets/img/profile.png'
import Pic from '../assets/img/profile1.png'

const Typography = () => {

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [popupOpen, setPopupOpen] = useState(true);

  const openPopup = () => {
    setPopupOpen(false);
    setTimeout(() => {
      // Apply styles to the #op element after a delay
      const opElement = document.getElementById('open');
      if (opElement) {
        opElement.style.visibility = 'visible';
      }
    }, 500);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
    
  return (
    <>
      <div className='container' style={{ visibility: popupOpen ? 'hidden' : 'visible' }} id="open">
      <div className="position-fixed top-50 start-50 translate-middle fixed-div info">
            <div className="col"> 
                <div className="card crd crd-pro">
                  <img src={Pic} className="card-img-top rounded-pro" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <h5 className="card-title crd-title">I am a Web Developer</h5>
                    <p className="card-text crd-text">Experienced web developer passionate about creating seamless online experiences. Skilled in front-end and back-end development, I aim to join a dynamic team where I can contribute my expertise to build user-friendly websites and drive business success.</p>
                   
                  </div>
                </div>
            </div>
      </div>
      </div>

      <div className='container-fluid bg'>
        <div className="d-flex justify-content-center tp">    
          <div className="row flex-lg-row-reverse container">
              <div className="col-11 mx-auto col-lg-5 mx-lg-0 tp">
                <img src={ Profile } className="img-fluid my-3 mx-auto profile" alt="Profile" />
              </div>               
              <div className="col-lg-7 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">       
                  <h1 className="f0">Elevate Your Website Experience.</h1>
                  <p className="mb-4 f3 font-weight-normal fnt">Building scalable, maintainable, and secure web applications, ensuring coding best practices, tailored for small businesses transitioning from simple sites to rich interactive web apps. If you're a business seeking a professional website, you've come to the right place.</p>
                  <div className="d-flex flex-column flex-md-row align-items-stretch justify-content-center justify-content-md-start mb-5 fs-5">
                    <div className="fs-5 d-inline-block mb-3 me-md-3 mb-md-0">
                      <p className="m-0 mr-2 l">Let's illustrate your idea</p>
                        <button type="button" className="button-39" title="Copy to clipboard" onClick={() => scrollToTarget('MoreInfo')}>More Info
                          <i className='arr'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right-circle-fill arrRight" viewBox="0 0 16 16">
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg>
                          </i>
                        </button>   
                    </div>
                  </div>                          
                  <hr className="mx-auto mx-lg-0 small-hr" id="services" />
              </div>
           </div>
        </div>
      </div>
    </>
    )
}

export default Typography;