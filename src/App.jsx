import Navbar from "./components/navbar"
import Social from './components/social'
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Skills from "./pages/skills"
import Contact from './pages/contact'
import Footer from "./pages/footer"

function App() {

  return (
    <div>
      <div className="relative">
        <Navbar/>
        <Social/>
      </div>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
