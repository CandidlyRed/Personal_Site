import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from 'react-pageflip';
import avatar from './assets/Me.png';
import catgif from './assets/cat.gif';
import email from './assets/email.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import app from './assets/App.png';
import lullaby from './assets/lullaby.png';
import same from './assets/same.png';
import './App.css';

function App(props) {
  const [dimensions, setWindowSize] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  });

  return (
    <HTMLFlipBook width={.5*dimensions.width} height={dimensions.height}>
      <div className="App">
        <div className="App-top-1">
          <a href="https://github.com/CandidlyRed">
            Github {" "}
            <img src={github} className="Icons" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/leocuimn/">
            Linkedin {" "}
            <img src={linkedin} className="Icons" alt="" />
          </a>
          <a href="mailto:cui00103@umn.edu">
            Contact {" "}
            <img src={email} className="Icons" alt="" />
          </a>
        </div>
        <div className="App-title">
            <h2>Hello, world! I'm Leo</h2>
            <div className="wrapper">
              Software Engineer: {" "}
              <div className="words">
                <span>Frontend Dev</span>
                <span>Data Metrics</span>
                <span>Mobile App Dev</span>
              </div>
            </div>
        </div>
        <div className="App-top-3">
          <h3>About Me:</h3>
        </div>
        <div className="App-center">
          <div className="Gray-text">
            <h5>Computer science student from Minnesota.</h5>
            <h5>I like to learn stuff. I love to make stuff!</h5>
          </div>
        </div>
      </div>

      <div className="App">
        <div className="App-music"></div>
        <div className="App-title">
          <img src={avatar} className="App-avatar" alt="avatar"/>
        </div>
        <div className="App-top-2">
          <h3>Pull or Click for Portfolio |</h3>
        </div>
      </div>

      <div className="App">
        <div className="App-top-4">
          <h4>Portfolio</h4>
        </div>
        
        <div className="Portfolio-2">
          <h6>Back to Hue: Location based social media app</h6>
          <a href="https://github.com/jeevanprakash0814/Back-to-Hue-Frontend">
            <img src={app} className="App-portfolio" alt=""/>
          </a>
        </div>
        <div className="Portfolio-1">
          <h6>Lullaby: Game to create unique melodies </h6>
          <a href="https://candidlyred.github.io/">
            <img src={lullaby} className="App-portfolio" alt=""/>
          </a>
        </div>
      </div>

      <div className="App">
        <div className="Portfolio-1">
          <h6>Personal website with animations and music </h6>
          <a href="">
            <img src={same} className="App-portfolio" alt=""/>
          </a>
        </div>
        <div className="Portfolio-2">
          More projects coming soon!
        </div>
        <div className="App-top-5">
          <h4>Portfolio</h4>
        </div>
      </div>

      <div className="App">
        <div className='Cat-top'>
          <h4>Curiosity finds the cat!</h4>
          <h4>Maybe you got here accidentally, but..</h4>
          <h4>that's part of the adventure!</h4>
          <h4>It could be a skip, a stumble,</h4>
          <h4>or a leap of faith.</h4>
          <h4>And maybe..</h4>
          <h4>something amazing will happen.</h4>
        </div>
        <div className='Corner'>
          <h5>| Pull</h5>
        </div>
      </div>

      <div className="App">
        <div className='Cat-center'>
          <img src={catgif} className="App-cat" alt="cat" />
        </div>
      </div>
    </HTMLFlipBook>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
