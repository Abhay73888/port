import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Myproject from "./components/Myproject"
import Tech from "./components/Tech"
import Journey from "./components/Journey"
import Sl6 from "./components/Sl6"
import Edu from "./components/Edu"
import Achiv from "./components/Achiv"
import Contect from "./components/contect"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Myproject />
      <Tech />
      <Journey></Journey>
      <Sl6></Sl6>
      <Edu></Edu>
      <Achiv></Achiv>
      <Contect></Contect>
      <Footer></Footer>
    </>
  )
}

export default App