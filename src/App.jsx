import { useState } from 'react'
import './App.css'
import images from './images/newPP.png'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// ---------About-------------
import Skills from './About/Skills';
import Education from './About/Education';
import Achievements from './About/Achievements';
// ----------project videos-------------
import NetflixClone from './playbackVideos/NetflixClone.jsx';
import YoutubeClone from './playbackVideos/YoutubeClone.jsx';
import Game from './playbackVideos/Game.jsx';

import Form_user from './Form_user.jsx';



function App() {


  return (
    <>
      <div className="my-font-class">
      {/* <div className='container'> */}
          <nav>
            <ul>
              <li><a href="#"><button>Home</button></a></li>
              <li><a href="#"><button>About</button></a></li>
              <li><a href="#"><button>Services</button></a></li>
              <li><a href="#"><button>Portfolio</button></a></li>
              <li><a href="#"><button>Contact</button></a></li>
              <a href="/images/cv.pdf" download="cv.pdf" className="btn2" style={{ marginLeft: "10%" }}>
              <button>Download CV</button>
              </a>

            </ul>
          </nav>
          
        {/* </div> */}
        <p className='intro' style={{fontSize:"xx-large",marginLeft:"15%",marginTop:"150px"}}>Hi, I'm <span className='name'>T</span>hirumalaivasan</p>
        <p style={{fontSize:"x-large",marginLeft:"19%",marginTop:"-1%"}}><span className='name'>F</span>ull Stack Developer</p>
    </div>

      {/* ---------------ABOUT ME------------------------- */}

      <div className="my-font-class" id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={images} style={{height:"300px",borderRadius:"10px",marginLeft:"10%"}}/>
            </div>
            <div className="about-col-2">
              <h1 className='about-title' style={{fontSize:"x-large"}}>About Me</h1>
              <p className='description' style={{width:"100%"}}>Welcome to my portfolio! I am Thirumalaivasan N, an aspiring Mechatronics Engineer. This website is designed to showcase my skills, projects, and achievements. With hands-on experience in programming, web development, and engineering projects, I have developed a strong foundation in both technical and creative domains. Explore my portfolio to learn more about my journey, accomplishments, and how I aim to contribute meaningfully to the field of engineering and technology.</p>

          <Router>
            <div className="tab-titles">
              <NavLink to="/" className={({ isActive }) => 
              isActive ? "tab-links active-tab" : "tab-links"
              }end><p>Skills</p></NavLink>

              <NavLink to="/education" className={({ isActive }) => 
              isActive ? "tab-links active-tab" : "tab-links"
              }><p>Education</p></NavLink>

              <NavLink to="/achievements" className={({ isActive }) => 
              isActive ? "tab-links active-tab" : "tab-links"
              }><p>Achievements</p></NavLink>
            </div>

              <Routes>
                <Route path="/" element={<Skills></Skills>}></Route>
                <Route path="/education" element={<Education />}></Route>
                <Route path="/achievements" element={<Achievements />}></Route>
              </Routes>
          </Router>
              
              
            </div>
          </div>
        </div>
      </div>

    {/* ---------------------Services---------------------- */}

    <div className="services my-font-class">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <img style={{height:"50px"}} src="https://img.icons8.com/ios7/512w/FFFFFF/internet.png" alt="" />
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{textDecoration:"underline",color:"wheat"}}>Learn more</a>
          </div>

          <div>
            <img style={{height:"50px"}} src="https://img.icons8.com/Dusk_Wired/512/FFFFFF/solidworks.png" alt="" />
            <h2>SolidWorks</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{textDecoration:"underline",color:"wheat"}}>Learn more</a>
          </div>

          <div>
            <img style={{height:"50px"}} src="https://img.icons8.com/m_outlined/512w/FFFFFF/sheets.png" alt="" />
            <h2>MERN Stack implementation</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" style={{textDecoration:"underline",color:"wheat"}}>Learn more</a>
          </div>
        </div>
      </div>
    </div>

      {/* --------------My work------------------ */}

    <div className='my-font-class portfolio'>
      <div className='container'>
        <h1 className='sub-tittle'>My Work</h1>
        <div className="work-list">
          <div className="work">
            <NetflixClone></NetflixClone>
            <div className='layer'>
              <table>
                <tbody>
                <tr>
                <td><a  style={{textDecoration:"none",color:"inherit"}} href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank"><h3>Netflix Clone</h3></a></td>
                <td><a href="https://github.com/THIRUMALAIVASAN1209/Netflix-Clone" target="_blank"><img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{height:"35px",width:"40px",paddingLeft:"10px"}}/></a></td>
                </tr>
                </tbody>
              </table>

              <p>This project is mainly focused on the design of the Netflix Home page by using HTML and CSS</p>
            </div>
          </div>
          <div className="work">
               
            <YoutubeClone></YoutubeClone>
            <div className='layer'>
            <table>
                <tbody>
                <tr>
                <td><a  style={{textDecoration:"none",color:"inherit"}} href="https://github.com/THIRUMALAIVASAN1209/Youtube-clone" target="_blank"><h3>Youtube Clone</h3></a></td>
                <td><a  href="https://github.com/THIRUMALAIVASAN1209/Youtube-clone" target="_blank"><img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{height:"35px",width:"40px",paddingLeft:"10px"}}/></a></td>
                </tr>
                </tbody>
              </table>
              <p>This project is mainly focused on the design of Youtube theme by using HTML and CSS</p>
            </div>
          </div>
          <div className="work">
            
            <Game></Game>
            <div className='layer'>
            <table>
                <tbody>
                <tr>
                <td><a  style={{textDecoration:"none",color:"inherit"}} href="https://github.com/THIRUMALAIVASAN1209/Rock-paper-Scissors" target="_blank"><h3>Rock Paper Scissor Game</h3></a></td>
                <td><a  href="https://github.com/THIRUMALAIVASAN1209/Rock-paper-Scissors" target="_blank"><img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" style={{height:"35px",width:"40px",paddingLeft:"10px"}}/></a></td>
                </tr>
                </tbody>
              </table>
              <p>This project is created by using HTML, CSS and JavaScript </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>  

    {/* ---------------My Achievements--------------

    <div className='my-font-class achievements'>
      <div className='container'>
        <h1 className='sub-tittle'>My Achievements</h1>
        <div className="achievement-list">
          <div className="achievement">
            <img src="./images/roots.jpg" alt="" />
          </div>
        </div>
      </div>
    </div> */}


    {/* -----------contact----------- */}

    <div className="contact my-font-class">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <table>
              <tbody>
              <tr>               
                <td><img style={{height:"30px",marginRight:"5px",marginBottom:"-10px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-line-white-icon.png" alt="" /></td>
                <td><p>thirumalaivasann.22mts@kongu.edu</p></td>
              </tr>
              </tbody>
            </table>
            <table>
              <tbody>
              <tr>
                <td><img className='phone' style={{height:"25px",marginLeft:"5px",marginBottom:"-5px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-white-icon.png" alt="" /></td>
                <td><p>+91-8668125089</p></td>
                <td><img style={{height:"30px",marginBottom:"-8px"}} src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png" alt="" /></td>
              </tr>
              </tbody>
            </table>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/thiru1209/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
              <a href="https://github.com/THIRUMALAIVASAN1209" target="_blank"><img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt=""/></a>
              <a href="https://www.instagram.com/thiru_art_1209/?next=%2F" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt=""/></a>
                
            </div>
            
          </div>

          <Form_user />


        </div>
      </div>
    </div>
    
    

    <footer className='my-font-class'>
      <p>© Copyright - 2025</p>
    </footer>

    </>
  )
}

export default App