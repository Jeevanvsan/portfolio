import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import "./App.css"

const  App = () => {

  return (
  <main style={{ backgroundImage: `url(/src/assets/main_bg.gif)`}} className="main-container">
    <Navbar />
    <Intro />
    <Skills />
  </main>
    
  )
}

export default App
