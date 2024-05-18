import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../assets/img/landing.png'
import Puppeteer from '../assets/img/puppeteer.png'
import Wallet from '../assets/img/wallet.png'
import Quiz from '../assets/img/quiz.png'
import Crawling from '../assets/img/crawling.png'
import SlotMachine from '../assets/img/slot.png'
import Time from '../assets/img/time.png'
import URLGen from '../assets/img/urlgen.png'
import Swiper from '../assets/img/tt.png'
import URL from '../assets/img/url.png'

const ProjectCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    const handleLandingPageClick = () => {
      navigate('/landingpage-docs');
    };
    const handlePuppeteerClick = () => {
      navigate('/puppeteer-docs');
    };
    const handlePHPWalletClick = () => {
      navigate('/phpwallet-docs');
    };
    const handleQuizClick = () => {
      navigate('/quiz-docs');
    };
    const handleCrawlingClick = () => {
      navigate('/crawling-docs');
    };
    const handleSlotClick = () => {
      navigate('/slotmachine-docs');
    };
    const handleTimeClick = () => {
      navigate('/time-docs');
    };
    const handleURLGenClick = () => {
      navigate('/urlgen-docs');
    };
    const handleSwiperClick = () => {
      navigate('/swiper-docs');
    };
    return (
        <div className="container-fluid bg">
            <div className="container">
            <h4 className="vi mor" id="project"> <code className='code'>◢</code> More Projects <code className='code'>◣</code></h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col"> 
                <div className="card crd">
                  <img src={Landing} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">JavaSCript</p>
                      <p className="col col-auto px-1 py-1 lang">JQuery</p>
                    </div>
                    <h5 className="card-title crd-title">Landing Page App</h5>
                    <p className="card-text crd-text">SEO marketing landing page link game promotions.</p>
                    <button type='button' className='btn-v' onClick={handleLandingPageClick}>Learn More</button>
                  </div>
                </div>
              </div>
              <div className="col"> 
                <div className="card crd">
                  <img src={Puppeteer} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">NodeJs</p>
                    </div>
                    <h5 className="card-title crd-title">Puppeteer - Automated Link Checker</h5>
                    <p className="card-text crd-text">Automation typing, clicking button using Puppeteer library.</p>
                    <button type='button' className='btn-v' onClick={handlePuppeteerClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={Wallet} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">PHP</p>
                      <p className="col col-auto px-1 py-1 lang">MySQL</p>
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">JQuery</p>
                    </div>
                    <h5 className="card-title crd-title">PHP Online Wallet App</h5>
                    <p className="card-text crd-text">This E-Wallet is a Web base Application that compound interest.</p>
                    <button type='button' className='btn-v' onClick={handlePHPWalletClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={Quiz} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">ReactJS</p>
                    </div>
                    <h5 className="card-title crd-title">Quiz App</h5>
                    <p className="card-text crd-text">This application is developed for educational purposes.</p>
                    <button type='button' className='btn-v' onClick={handleQuizClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={Crawling} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">PHP</p>
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                    </div>
                    <h5 className="card-title crd-title">Web Crawling</h5>
                    <p className="card-text crd-text">Navigate through links found on the websites to index the pages.</p>
                    <button type='button' className='btn-v' onClick={handleCrawlingClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={SlotMachine} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">Javascript</p>
                    </div>
                    <h5 className="card-title crd-title">Slot Machine - Mobile</h5>
                    <p className="card-text crd-text">Spinning reels capable of generating random combinations of symbols upon initializing.</p>
                    <button type='button' className='btn-v' onClick={handleSlotClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={Time} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">Javascript</p>
                    </div>
                    <h5 className="card-title crd-title">Live Time</h5>
                    <p className="card-text crd-text">This App developed for Online Raffle draw purposes.</p>
                    <button type='button' className='btn-v' onClick={handleTimeClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={URLGen} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">Javascript</p>
                    </div>
                    <h5 className="card-title crd-title">URL Generator</h5>
                    <p className="card-text crd-text">The project serve as the company domain name referrence.</p>
                    <button type='button' className='btn-v' onClick={handleURLGenClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={Swiper} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">Javascript</p>
                    </div>
                    <h5 className="card-title crd-title">Multi Swiper - Responsive</h5>
                    <p className="card-text crd-text">Unleash the power of multi swiper Marketing Design.</p>
                    <button type='button' className='btn-v' onClick={handleSwiperClick}>Learn More</button>
                  </div>
                </div>
            </div>
           </div>
        </div>
        </div>
    )
}

export default ProjectCard;