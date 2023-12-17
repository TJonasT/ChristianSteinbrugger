
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Head.css'
import './content/Navbar'
import Navbar from './content/Navbar'
import WelcomeScreen from './content/WelcomeScreen'
import Sec1 from './content/LowerPages/Sec1'
import Sec2 from './content/LowerPages/Sec2'
import Sec3 from './content/LowerPages/Sec3'
import Footer from './content/Footer'
function App() {


  return (
    <div>
      
    <Navbar/>
    <Routes>
    <Route path="ChristianSteinbrugger" element={
      <div>
        <WelcomeScreen/>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Footer/>
      </div>
    }/>

    <Route path="*" element={
      <div>
        some content here
      </div>
    }/>

    </Routes>
    </div>
  )

}

export default App
