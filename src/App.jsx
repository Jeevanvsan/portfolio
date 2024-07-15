import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import "./App.css"
import WebgiViewer from "./components/WebgiViewer"

const  App = () => {

  return (
  <main  className="main-container bg-black">
    <Navbar />
    <Intro />
    <Skills />
    <WebgiViewer/>
  </main>
    
  )
}

export default App
