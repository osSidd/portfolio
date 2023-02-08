import Navbar from "./components/navbar"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Skills from "./pages/skills"
import Contact from './pages/contact'
import Footer from "./pages/footer"

function App() {

  return (
    <div>
      <div className="relative">
        <Navbar/>
      </div>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
