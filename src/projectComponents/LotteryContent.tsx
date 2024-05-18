import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const LotteryContent = () => {

    return (
        <>
        <div className="d-flex container-fluid pb">
          <div className="container">
          <div className="li-form">
              <div id="list" className="list-group">
                  <a className="list-group-item list-group-item-action" href="#list-item-1">How it works</a>
                  <a className="list-group-item list-group-item-action" href="#list-item-2">Database Design</a>
                  <a className="list-group-item list-group-item-action" href="#list-item-3">Game Rules</a>
                  <a className="list-group-item list-group-item-action" href="#list-item-4">Condition of Participation</a>
                  <a className="list-group-item list-group-item-action" href="#list-item-5">Event Description</a>
              </div>
          </div>
            <div className="scrollspy-example f-w" data-bs-spy="scroll" data-bs-target="#list" data-bs-smooth-scroll="true" tabIndex={0}>     
                  <h5 className="p-f m-t">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-stickies-fill g-l" viewBox="0 0 16 16">
                      <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5"/>
                      <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
                    </svg>
                    Project: Lottery Slot Machine</h5>
                  <p className="l">SEO Company Promotion</p> 
                  <h5 id="list-item-1" className="p-f t-s">How it works</h5> 
                  <p className="p-f">Creating a lottery slot game involves several components, including the front end (what users see and interact with), the back end (which handles data processing and storage), and a database (to store information like user data and game results). Here's a breakdown approach building each part of the game:</p>       
                  <p className="p-f t-s">Front End (HTML, CSS, JavaScript): 1. HTML Structure:</p>
                  <li className="p-f"> Creating the basic structure of the game interface using HTML. This includes elements like buttons, input AppID, containers for displaying game results, images, popup message, paragraph, Labels and any other necessary components.</li>
                  <p className="p-f t-s">CSS Styling:</p>
                  <li className="p-f">Using CSS to style HTML elements to make them visually appealing and user-friendly. This involves defining colors, fonts, layout, background colors, radius, width, height and animations to create an engaging user experience.</li>
                  <p className="p-f t-s">JavaScript Interactivity:</p>
                  <li className="p-f">Implement the interactive features of game using JavaScript. This includes functionalities like spinning the slot reels, generating random numbers, handling user input, and updating the interface based on game outcomes.</li>    
                  <p className="p-f t-s">Back End (PHP): 1. Server-Side Processing:</p>  
                  <li className="p-f">Use PHP to handle server-side processing tasks, such as validating user inputs, calculating and inserting game results data, and interacting with the database.</li>   
                  <h5 id="list-item-2" className="p-f t-s">Database (MySQL): 1. Database Design:</h5>   
                  <p className="p-f t-s">MySQL Queries:</p>
                  <li className="p-f">Write MySQL queries in PHP to interact with the database. This includes tasks like inserting new records parameterized uses prepared statements and encrypting / decrypting the data for security purposes, updating existing data, and retrieving information for display in the game interface.</li>
                  <h5 id="list-item-3" className="p-f t-s">Game Rules</h5>        
                    <div className="rules">
                        <p className="p-con p-x">1. The player need to meet the activity requirements on the same day (valid betting + deposit) to participate in the Christmas gift box lottery the next day, allowing to make money every day.</p>      
                    </div>      
                  <h5 id="list-item-4" className="p-f t-s">Condition of Participation</h5>  
                    <div className="rules">
                        <div className="p-xx">
                            <p className="p-con">1. Bet more than or equal to 3000+ and deposit more than or equal to 1000 to get 1 lucky draw chance.</p> 
                            <p className="p-con">2. Bet more than or equal to 5000+ and deposit more than or equal to 2000 to get 2 lucky draw chance.</p>
                            <p className="p-con">3. Bet more than or equal to 8000+ and deposit more than or equal to 3000 to get 3 lucky draw chance.</p>
                        </div>
                    </div>     
                  <h5 id="list-item-5" className="p-f t-s">Event Description</h5> 
                    <div className="rules">
                        <div className="p-xx">
                            <p className="p-con">1. Members who have won the lottery will receive the bonus within half an hour after winning the lottery. They can apply for withdrawal with 1 times the turnover.</p> 
                            <p className="p-con">2. Members who obtain deposit coupons need to contact the Tiantian chat specialist customer service to apply for the bonus after winning and depositing before placing bets, and then they can have fun. The validity period is 1 week, and it will be invalid after the expiration date. You can apply for withdrawal with 3 times turnover of (deposit + bonus).</p>
                            <p className="p-con">3. Members who receive gifts need to contact online customer service to submit information within one week after winning. Members can also choose gift discounts, which will be invalid after the expiration date. You can apply for withdrawal with a turnover of 1 times the discounted price.</p>
                            <p className="p-con">4. Each player, each household, each address, each email address, each phone number, the same payment method (same debit card/credit card/bank account) and IP address can only enjoy the offer once; if a member applies repeatedly Account behavior, the company reserves the right to cancel or withdraw membership bonuses.</p>
                            <p className="p-con">5. Make risk-free bets on real people, chess, cards, fishing, electronics, lottery, sports, etc. (for example: bet on banker and player, big and small, odd and even, win or lose, red and black, and roulette at the same time in a single game. The number of bets in a single game exceeds the global number 2/ 3. Double bets, etc.), any cancellation of bets, events or rounds will not allow you to participate in this event.</p>
                            <p className="p-con">6. All Tiantian Live offers are specially designed for players. If any group or individual is found to be dishonestly obtaining bonuses or making any threats or abusing the company's discounts, the company reserves the right to freeze or cancel the group or individual's account and account balance. , Tiantian Live reserves the right of final interpretation of the event, as well as the right to modify or terminate the event without notice. This regulation applies to all offers.</p>
                        </div>
                    </div>  
                        <div className="row justify-content-center">
                          <div className="col-auto">
                          <button type='button' className='all px-4 m-tb' data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github g-l" viewBox="0 0 16 16">
                                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                                </svg>   
                                                Source Code</button>
                          </div>
                          <div className="col-auto">
                          <button type='button' className='all px-4 m-tb' data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-broadcast g-l" viewBox="0 0 16 16">
                                                  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                                                </svg>   
                                                View Live</button>
                          </div>
                        </div>
                        <div className="collapse" id="collapse">
                          <div className="card card-body d-flex m-b"> 

                            ⚠️ Warning: Unable to display the source code due to company privacy policies. For sample code I provided file for your reference. Here is the link to my github <a href="https://github.com/markjay18/slot-machine" target="_blank">https://github.com/markjay18/slot-machine</a>
                            

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
        </>    
    )
}

export default LotteryContent;