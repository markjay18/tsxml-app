import Step1 from '../assets/img/Step1.png'
import Step2 from '../assets/img/Step2.png'

const SlotContent = () => {
    return (
        <div className="d-flex container-fluid pb">
            <div className="container">
                <div className="f-w">
                <h5 className="p-f m-t">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-stickies-fill g-l" viewBox="0 0 16 16">
                              <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5"/>
                              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
                            </svg>
                        Project: Slot Machine </h5>
                    <p className="l">Project from Scratch</p> 
                    <h5 id="list-item-1" className="p-f t-s">How it works</h5>
                    <p className="p-f">The mechanics of this slot machine won by two and 3 pairs. Two pairs wins 100 diamond which is equivalent to some amount of money and the 3 pairs won 200 diamond. Roll will determine the matching of each reel. </p>
                    <h5 id="list-item-1" className="p-f t-s">Features</h5>
                    <div className="rules">
                        <div className="p-xx">
                            <p className="p-con">1. Pressing the buttons contains several delays making sure that reels no duplicate.</p>
                            <p className="p-con">2. Automatic reels off.</p>
                            <p className="p-con">3. Uses audio, images.</p>
                        </div>
                    </div>
                    <h5 id="list-item-1" className="p-f t-s">User Instructions</h5>
                    <p className="p-f">If you are using Google Browser - recommended</p>
                    <div className="rules">
                        <div className="p-xx">
                            <p className="p-con">1. Right click on browser and choose inspect.</p>
                            <img className='php' src={Step1} />
                            <p className="p-con">2. Make sure that The Dimension is set like in the image below. Choose mobile view that you want.</p>
                            <img className='php' src={Step2} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-auto">
                      <a href="https://github.com/markjay18/online-slot" target="_blank"><button type='button' className='all px-4 m-tb' data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github g-l" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        Source Code</button></a>
                    </div>
                    <div className="col-auto">
                      <a href="https://markjay18.github.io/online-slot/" target="_blank"><button type='button' className='all px-4 m-tb' data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-broadcast g-l" viewBox="0 0 16 16">
                          <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                        </svg>
                        View Live</button></a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default SlotContent;