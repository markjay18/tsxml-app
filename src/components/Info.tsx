import Profile from '../assets/img/profile3.png'

const Info = () => {
    return (
      <div className='container-fluid bg'>
        <div className="d-flex justify-content-center">    
          <div className="row flex-lg-row container">
              <div className="col-11 mx-auto col-lg-5 mx-lg-0 tp bot">
                <img src={ Profile } className="img-fluid my-3 mx-auto profile rock" alt="Profile" />
              </div>               
              <div className="col-lg-7 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">       
                  <h1 className="f0 more">Education</h1>
                  <h4 className="mb-4 f3 font-weight-normal fnt more">I have a Bachelor of Science degree in Computer Science.</h4>
                  <div className="d-flex flex-column flex-md-row align-items-stretch justify-content-center justify-content-md-start mb-5 fs-5">
                    <div className="fs-5 d-inline-block mb-3 me-md-3 mb-md-0 more">
                      <p className="m-0 mr-2 l">Experienced Web | PHP | Software developer passionate about creating seamless online experiences. Skilled in front-end and back-end development, I aim to join a dynamic team where I can contribute my expertise to build user-friendly websites and drive business success.</p>  
                    </div>
                  </div>                          
              </div>
           </div>
        </div>
      </div>
    )
}

export default Info;