
import { useNavigate } from 'react-router-dom'
import Lottery from '../assets/img/lottery.png'
import Dashboard from '../assets/img/dashboard.png'
import URL from '../assets/img/url.png'

const Projects = () => {

    const navigate = useNavigate();

    const handleMoreProjectsClick = () => {
      navigate('/more-projects');
    };

    const handleLotteryClick = () => {
      navigate('/lottery-docs');
    };
  
    const handleDashboardClick = () => {
      navigate('/dashboard-docs');
    };
    
    const handleNotepadClick = () => {
      navigate('/notepad-docs');
    };
  
    return (
        <div className="container-fluid bg">
            <div className="container">
            <h4 className="vi" id="project"> <code className='code'>◢</code> Latest Projects <code className='code'>◣</code></h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col"> 
                <div className="card crd">
                  <img src={Lottery} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">PHP</p>
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">JavaSCript</p>
                      <p className="col col-auto px-1 py-1 lang">JQuery</p>
                      <p className="col col-auto px-1 py-1 lang">MySQL</p>
                    </div>
                    <h5 className="card-title crd-title">Christmas Lottery Promotion</h5>
                    <p className="card-text crd-text">Players have the chance to win awesome prizes just by participating.</p>
                    <button type='button' className='btn-v' onClick={handleLotteryClick}>Learn More</button>
                  </div>
                </div>
              </div>
              <div className="col"> 
                <div className="card crd">
                  <img src={Dashboard} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">PHP</p>
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">JavaSCript</p>
                      <p className="col col-auto px-1 py-1 lang">JQuery</p>
                      <p className="col col-auto px-1 py-1 lang">MySQL</p>
                    </div>
                    <h5 className="card-title crd-title">Dashboard Panel</h5>
                    <p className="card-text crd-text">Admin control panel setting prize, rules and lottery data.</p>
                    <button type='button' className='btn-v' onClick={handleDashboardClick}>Learn More</button>
                  </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card crd">
                  <img src={URL} className="card-img-top rounded-img" alt="Lottery" />
                  <div className="card-body crd-body"> 
                    <div className="row r-s">
                      <p className="col col-auto px-1 py-1 lang">PHP</p>
                      <p className="col col-auto px-1 py-1 lang">HTML5</p>
                      <p className="col col-auto px-1 py-1 lang">CSS3</p>
                      <p className="col col-auto px-1 py-1 lang">JavaSCript</p>
                    </div>
                    <h5 className="card-title crd-title">Notepad txt Updater</h5>
                    <p className="card-text crd-text">This web base SEO text editor URL link is awesome idea.</p>
                    <button type='button' className='btn-v' onClick={handleNotepadClick}>Learn More</button>
                  </div>
                </div>
            </div>
            </div>
        </div>
        <div className='pro text-center'  id="MoreInfo"><button type='button' className='all px-4' onClick={handleMoreProjectsClick}>See more projects</button></div>
        </div>
    )
}

export default Projects;