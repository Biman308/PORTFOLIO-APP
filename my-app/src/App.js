import React, { useEffect } from 'react';
import './App.css';
import Typed from 'typed.js';
import 'boxicons/css/boxicons.min.css';
import pic2 from './img/pic2.jpg';
import login from './img/login.jpg';
import pass from './img/pass.jpg';
import tic from './img/tic.jpg';


function App() {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Software Developer', 'Full-Stack Developer', 'Industry Developer', 'Business Developer Etc.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className="left">Biman's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="#home" style={{ "--i": 1 }} className="active">Home <span></span></a></li>
              <li><a href="#about" style={{ "--i": 2 }}>About <span></span></a></li>
              <li><a href="#skills" style={{ "--i": 3 }}>Skills <span></span></a></li>
              <li><a href="#projects" style={{ "--i": 4 }}>Projects <span></span></a></li>
              <li><a href="#contact" style={{ "--i": 5 }}>Contact <span></span></a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h2>Hello, Myself</h2>
          <h1>Biman Patra</h1>
          <h3>I'm a <span id="element"></span></h3>
          <div className="home-sci">
            <a href="#" style={{ "--i": 6 }}><i className='bx bxl-facebook'></i></a>
            <a href="#" style={{ "--i": 7 }}><i className='bx bxl-instagram'></i></a>
            <a href="#" style={{ "--i": 8 }}><i className='bx bxl-whatsapp'></i></a>
            <a href="#" style={{ "--i": 9 }}><i className='bx bxl-linkedin'></i></a>
          </div>
          <a href="#" className="btn-box">More about me</a>
        </div>
        <div className="image-content">
          <img className="image-contentt" src={pic2} alt="Profile" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutimg">
          <img className="aboutimgg" src={pic2} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>Full-Stack Developer!</h4>
          <p className="sp">
            Greetings! I'M BIMAN PATRA, a Passionate and Dedicated Computer Science and Engineering (CSE) Student with a relentless curiosity for technology and its applications. Currently pursuing a Bachelor of Technology (B.Tech) at Maulana Abul Kalam Azad University of Technology (MAKAUT). Throughout my academic journey, I have honed my programming skills in languages such as Java, Python, C++ and have actively sought out opportunities to apply my knowledge in real-world scenarios. My coursework has provided me with a solid foundation in algorithms, data structures, and software development methodologies. Additionally, I have engaged in various extracurricular activities including coding competitions, where I have demonstrated my ability to think critically and work collaboratively under tight deadlines. My enthusiasm for innovation and continuous learning, combined with my strong analytical and problem-solving abilities, positions me as a motivated and capable individual ready to contribute to the ever-evolving field of computer science and engineering.
          </p>
          <a href="#" className="btn-box">More About Me</a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h1 className="sub-title">My <span>Achievements</span></h1>
          <div className="services-list">
            <div>
              <i className="bx bxs-cloud"></i>
              <h2 style={{ color: 'aqua' }}>Cloud Foundations Badge</h2>
              <p>
                I generally feel positively about gaining the AWS Cloud Foundations badge. It's seen as a valuable credential that demonstrates foundational knowledge and skills in cloud computing using Amazon Web Services (AWS). Many see it as a stepping stone towards more advanced AWS certifications and career opportunities in cloud computing.
              </p>
              <a href="#" className="read">Learn More</a>
            </div>
            <div>
              <i className="bx bxl-aws"></i>
              <h2 style={{ color: 'aqua' }}>Cloud Computing</h2>
              <p>
                I generally feel excited, hopeful, and motivated about gaining an AWS cloud computing internship. I see it as a valuable opportunity to gain practical experience in a rapidly growing field, enhance my skills, and potentially open doors to future career opportunities. I view AWS internships as prestigious due to the prominence of Amazon Web Services in the cloud computing industry, and I am eager to learn from industry experts and work on real-world projects. Overall, landing an AWS cloud computing internship is often seen as a significant accomplishment and a stepping stone towards a successful career in technology.
              </p>
              <a href="#" className="read">Learn More</a>
            </div>
            <div>
              <i className="bx bxs-cloud"></i>
              <h2 style={{ color: 'aqua' }}>Cloud Architecting Badge</h2>
              <p>
                I feel positively about gaining the AWS Cloud Architecting badge because it validates expertise in designing scalable, reliable, and cost-effective cloud solutions using Amazon Web Services. Earning this badge can enhance credibility, open up career opportunities, and demonstrate proficiency in cloud architecture, which is increasingly in demand in the tech industry.
              </p>
              <a href="#" className="read">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="container3">
          <div className="container1">
            <h1 className="heading1">Technical <span className="col">Skills</span></h1>
            <div className="Technical-bars">
              <div className="bar">
                <i style={{ color: '#c95d2e' }} className='bx bxl-html5'></i>
                <div className="info">
                  <span><b>HTML</b></span>
                </div>
                <div className="progress-line html">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <i style={{ color: '#147bbc' }} className='bx bxl-css3'></i>
                <div className="info">
                  <span><b>CSS</b></span>
                </div>
                <div className="progress-line css">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <i style={{ color: '#b0bc1e' }} className='bx bxl-javascript'></i>
                <div className="info">
                  <span><b>JAVASCRIPT</b></span>
                </div>
                <div className="progress-line javascript">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <i style={{ color: '#69bcbc' }} className='bx bxl-react'></i>
                <div className="info">
                  <span><b>REACT</b></span>
                </div>
                <div className="progress-line react">
                  <span></span>
                </div>
              </div>
              <div className="bar">
                <i style={{ color: '#e86666' }} className='bx bxl-java'></i>
                <div className="info">
                  <span><b>JAVA</b></span>
                </div>
                <div className="progress-line java">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="container2">
            <h1 className="heading1">Professional <span className="col">Skills</span></h1>
            <div className="radial-bars" id="firstid">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="85"></circle>
                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <p className="percentage">90%</p>
              <p className="text"><b>CREATIVITY</b></p>
            </div>
            <div className="radial-bars" id="secondid">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="85"></circle>
                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
              </svg>
              <p className="percentage">60%</p>
              <p className="text"><b>COMMUNICATION</b></p>
            </div>
            <div className="radial-bars" id="thirdid">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="85"></circle>
                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
              </svg>
              <p className="percentage">75%</p>
              <p className="text"><b>PROBLEM-SOLVING</b></p>
            </div>
            <div className="radial-bars" id="fourthid">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="85"></circle>
                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
              </svg>
              <p className="percentage">80%</p>
              <p className="text"><b>TEAM-WORK</b></p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="main-text">
          <h2>My <span>Projects</span></h2>
          <div className="portfolio-content">
            <div className="row">
              <img src={pass} alt="Password Manager" />
              <div className="layer">
                <h5 className="special1">Password Manager</h5>
                <p className="special2">
                  A Java-based password manager application designed to securely store and manage user passwords. It provides functionalities for storing, retrieving, and generating passwords, employing strong encryption techniques to ensure data security. Users can organize passwords into categories, update them regularly, and access them via a user-friendly interface.
                </p>
                <a href="#"><i className='bx bx-link-external' style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>

            <div className="row">
              <img src={login} alt="Login System" />
              <div className="layer">
                <h5 className="special1">Login System</h5>
                <p className="special2">
                  A login system typically involves authentication of users through credentials like usernames and passwords. It verifies user identity before granting access to a system or application. Security measures like encryption and password hashing are often employed to safeguard user data. User permissions and role-based access control may also be implemented for different levels of authorization.
                </p>
                <a href="#"><i className='bx bx-link-external' style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>

            <div className="row">
              <img src={tic} alt="Tic-Tac-Toe Game" />
              <div className="layer">
                <h5 className="special1">Tic-Tac-Toe Game</h5>
                <p className="special2">
                  This project involves creating a simple command-line Tic-Tac-Toe game. Players take turns marking spaces on a 3x3 grid, aiming to get three of their symbols (typically X or O) in a row, column, or diagonal. The game ends when one player achieves this goal or when the grid is full, resulting in a draw.
                </p>
                <a href="#"><i className='bx bx-link-external' style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn-box56">Show More</a>
      </section>

      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's Work <span>Together</span></h4>
          <p className="special3">
            Thank you for taking the time to explore my portfolio. Whether you're seeking creative collaboration, discussing a potential project, or simply want to connect, I'm here to make that happen. Let's transform ideas into reality together. Feel free to reach out via the contact information provided below. Your next big endeavor starts here!
          </p>
          <div className="contact-list">
            <li><i className="bx bxs-send"></i> bimanpatra2004@gmail.com</li>
            <li><i className="bx bxs-phone"></i> 9064384958</li>
          </div>
          <div className="contact-icons">
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-instagram"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="text" placeholder="Enter Your Subject" />
            <textarea placeholder="Enter Your Message" rows="10" required></textarea>
            <input type="submit" value="Submit" className="send" />
          </form>
        </div>
      </section>

      <div className="last-text">
        <p>Developed With Love By Biman Patra © 2024</p>
      </div>
      <a href="#" className="top"><i className='bx bx-up-arrow-alt'></i></a>
    </div>
  );
}

export default App;
