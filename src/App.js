import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import HTMLFlipBook from 'react-pageflip';
import avatar from './assets/Me.png';
import catgif from './assets/cat.gif';
import email from './assets/email.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import app from './assets/App.png';
import melody from './assets/melody.png';
import same from './assets/same.png';
import Player from './player/player';
import { songsdata } from './player/audio';
import { useRef, useState, useEffect } from 'react';
import './App.css';

const Music = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
    
  }, [isplaying])
  
  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  return (
    <div className="music">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  );
}

const Page = () => {
  const [dimensions, setWindowSize] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
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
    <HTMLFlipBook width={.5 * dimensions.width} height={dimensions.height}>
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
        <div className="App-righttop">
          <h2>Pull or Click for Portfolio |</h2>
        </div>
        <div className="App-title">
          <img src={avatar} className="App-avatar" alt="avatar" />
        </div>
        <div className="App-top-2"></div>
      </div>

      <div className="App">
        <div className="App-top-4">
          <h4>Portfolio</h4>
        </div>

        <div className="Portfolio-2">
          <h6>Back to Hue: Location based social media app</h6>
          <a href="https://github.com/jeevanprakash0814/Back-to-Hue-Frontend">
            <img src={app} className="App-portfolio" alt="" />
          </a>
        </div>
        <div className="Portfolio-1">
          <h6> Melody Project: Game to create unique melodies </h6>
          <a href="https://melodyproject.vercel.app/">
            <img src={melody} className="App-portfolio" alt="" />
          </a>
        </div>
      </div>

      <div className="App">
        <div className="Portfolio-1">
          <h6>Personal website with animations and music </h6>
          <a href="https://github.com/CandidlyRed/Personal_Site">
            <img src={same} className="App-portfolio" alt="" />
          </a>
        </div>
        <div className="Portfolio-2">
          More projects coming soon!
        </div>
        <div className="App-top-5">
        </div>
      </div>

      <div className="App">
        <div className='Corner'>
          <h5>| Pull</h5>
        </div>
        <div className='Cat-top'>
          <h4>Curiosity finds the cat!</h4>
          <h4>Maybe you got here accidentally, but..</h4>
          <h4>that's part of the adventure!</h4>
          <h4>It could be a skip, a stumble,</h4>
          <h4>or a leap of faith.</h4>
          <h4>And maybe..</h4>
          <h4>something amazing will happen.</h4>
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

// ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default function App() {
  return (
    <div>
      <Page/>
      <Music/>
    </div>
  );
}
