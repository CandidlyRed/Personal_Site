import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from 'react-pageflip';
import avatar from './assets/Me.png';
import catgif from './assets/cat.gif';
import email from './assets/email.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import './App.css';

const audioList1 = [
  {
    name: 'To a Friend',
    singer: 'Candidly',
    cover:
      'https://i.ytimg.com/vi/GLwE0-3hln8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBrS7ArnQBKahHzIfHrKIUb1IIhzQ',
    musicSrc:
      'https://res.cloudinary.com/dlupwiavd/video/upload/v1660062728/To_a_friend_dkci89.mp3',
  },
  {
    name: 'Improv - "Canvas"',
    singer: 'Candidly',
    cover:
      'https://i.ytimg.com/vi/ajU75l0_rJs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAUco2OJi46W6tw1mUpKWfiLIZOkg',
    musicSrc:
      'https://res.cloudinary.com/dlupwiavd/video/upload/v1660063192/Improv_-_Canvas_-_83021__getmp3.pro_zdh89n.mp3',
  },
  {
    name: 'Improv - "Orange"',
    singer: 'Candidly',
    cover:
      'https://i.ytimg.com/vi/UGHx86fdP84/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAektetnYSr5HOquDOhDiYGL3IEJA',
    musicSrc:
      'https://res.cloudinary.com/dlupwiavd/video/upload/v1660063146/Improv_-_Orange_-_72422__getmp3.pro_uybhay.mp3',
  },
  {
    name: 'Dehydration',
    singer: 'Candidly',
    cover:
      'https://i.ytimg.com/vi/qIG8TGsl1q8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAwbwt4W_rbJNpclFBi28sAoqpZig',
    musicSrc:
      'https://res.cloudinary.com/dlupwiavd/video/upload/v1660062753/Dehydration_xytkd7.mp3',
  },
]

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
          <img src={avatar} className="App-avatar" alt="avatar"/>
        </div>
        <div className="App-center-2"></div>
      </div>

      <div className="App">
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
        <div className="App-top-2">
          <h5>Pull or Click for Portfolio |</h5>
        </div>
      </div>

      <div className="App">
        <div className="temp">
          <h4>Portfolio</h4>
        </div>
      </div>

      <div className="App">
        <div className="temp">
        <h4>Portfolio</h4>
        </div>
      </div>

      <div className="App">
        <div className='Cat-top'>
          <h4>Hey, you found the cat!</h4>
          <h4>Shh, it's still sleeping</h4>
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
