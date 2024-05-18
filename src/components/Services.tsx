import Diamond from '../assets/img/diamond.png'
import Code from '../assets/img/hacker.png'
import Net from '../assets/img/internet.png'
import Idea from '../assets/img/idea.png'
import Compatible from '../assets/img/compatibility.png'
import Cloud from '../assets/img/cloud.png'

const Services = () => {
    return (
        <>
        <div className='container-fluid bg'>
            <div className="container">
                <h5 className="vi">I have been offering these services for almost a year</h5>
                <div className="row row-cols-md-3 g-4 justify-content-center text-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="card">
                       <img src={ Diamond } className="card-img-top mx-auto d-block custom-img-size" alt="diamond" />
                       <div className="card-body">
                        <h5 className="card-title">Expectation</h5>
                        <p className="card-text">Delivering Excellence: On-Time Project Completion and Exceptional User Experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={ Code } className="card-img-top mx-auto d-block custom-img-size" alt="Code" />
                      <div className="card-body">
                        <h5 className="card-title">Design / Coding</h5>
                        <p className="card-text">Crafting Tailored Software Solutions: UX/UI, Functionality, and Features Aligned with Client Needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img src={ Net } className="card-img-top mx-auto d-block custom-img-size ss" alt="Net" />
                      <div className="card-body">
                        <h5 className="card-title">Deployment</h5>
                        <p className="card-text">Deliver Confidence with Thoroughly Tested Software: Built for Enhanced Usability.</p>
                      </div>
                    </div>
                   </div>
                   <div className="col mb-5">
                    <div className="card">
                      <img src={ Idea } className="card-img-top mx-auto d-block custom-img-size" alt="Net" />
                      <div className="card-body">
                        <h5 className="card-title">Awesome Idea</h5>
                        <p className="card-text">A dynamic co-working space buzzing with energy, filled with developers collaborating and brainstorming.</p>
                      </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="card">
                      <img src={ Compatible } className="card-img-top mx-auto d-block custom-img-size" alt="Net" />
                      <div className="card-body">
                        <h5 className="card-title">Compatibility</h5>
                        <p className="card-text">Discover the Power of Responsive and Adaptive Web Design: Transforming Your Online Experience Across Devices.</p>
                      </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="card">
                      <img src={ Cloud } className="card-img-top mx-auto d-block custom-img-size" alt="Net" />
                      <div className="card-body">
                        <h5 className="card-title">Security</h5>
                        <p className="card-text" id='career'>Creating secure applications that protect against any type of user:  implementing encryption, authentication.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;