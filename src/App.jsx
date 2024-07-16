import { useEffect, useRef, useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "./App.css";
import WebgiViewer from "./components/WebgiViewer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const App = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('bgm.mp3');
    audio.loop = true; // Loop the background music
    audioRef.current = audio;
  }, []);

  const handleUserInteraction = () => {
    console.log("play");
    audioRef.current.play().then(() => {
      setIsPlaying(true);
      document.removeEventListener('click', handleUserInteraction);
    }).catch(error => {
      console.log('Error playing audio:', error);
    });
  };

  const playScroll = () =>{
      // console.log(isMuted)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, left:0,behavior: 'smooth' });
  };

  useEffect(() => {
    // Add event listeners for user scroll and click
    document.addEventListener('scroll',playScroll);
    document.addEventListener('click', handleUserInteraction);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('scroll', playScroll);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling initially
    document.body.style.overflow = 'hidden';
}, []);

  return (
    <main className="main-container bg-black">
      <Navbar />
      <Intro />
      <Skills isMuted={isMuted}/>
      <WebgiViewer />
      {isPlaying && (
        <button 
          onClick={toggleMute} 
          className="mute-button btn"
          style={{ position: 'fixed', top: 20, left: 20, zIndex: 1000}}
        >
            <FontAwesomeIcon icon={isMuted ? faVolumeUp : faVolumeMute} />
        </button>
        
      )}

      {isPlaying && (
                <button 
                onClick={scrollUp} 
                className="up-button btn"
                style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000}}
              >
                  <FontAwesomeIcon icon={faArrowUp} />
              </button>
              
            )}
    </main>
  );
};

export default App;
