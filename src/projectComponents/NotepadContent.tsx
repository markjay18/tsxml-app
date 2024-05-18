
const NotepadContent = () => {
    return (
        <div className="d-flex container-fluid pb">
            <div className="container">
                <div className="f-w">
                <h5 className="p-f m-t">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-stickies-fill g-l" viewBox="0 0 16 16">
                          <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5"/>
                          <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
                        </svg>
                        Project: Notepad txt Updater</h5> 
                    <p className="l">SEO Company Updater</p>
                    <h5 id="list-item-1" className="p-f t-s">How it works</h5> 
                    <p className="p-f t-s">Technical Solution</p>
                    <li className="p-f">The SEO staff will input links like https://example.cn/main/panel - SEO tester remark, then the php code handle the get, insertion, update of link in notepad .txt file. </li>
                    <li className="p-f">Code is inside the server and it performs all the necessary updates for auto link speed test checking. The main purpose of this project is to instantly update links and send to server. The user don't have to access server everytime there is an update on the links.</li>
                    <div className="row justify-content-center">
                          <div className="col-auto">
                          <a href="https://github.com/markjay18/notepad-updater" target="_blank"><button type='button' className='all px-4 m-tb' data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github g-l" viewBox="0 0 16 16">
                                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                                </svg>   
                                                Source Code</button></a>
                          </div>
                          <div className="col-auto">
                          <button type='button' className='all px-4 m-tb' data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-broadcast g-l" viewBox="0 0 16 16">
                                                  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                                                </svg>   
                                                View Live</button>
                          </div>
                        </div>

                        <div className="collapse" id="collapse1">
                          <div className="card card-body d-flex m-b"> 

                            ⚠️ Warning: Sorry! You can't visit this site. The SEO website is either under maintenance or has changed its domain link. This is for company security purposes.
                            

                          </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default NotepadContent;