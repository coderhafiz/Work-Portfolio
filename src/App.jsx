import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Portfolios from "./components/Portfolios"
import ResumeSection from "./components/ResumeSection"
import Testimonials from "./components/Testimonials"
// import Test from "./components/Test"


const App = () => {
  return (

    <div className="m-0 p-0 text-slate-500 ">


        <Nav/>
        <Hero/>
        <About/>
        <ResumeSection/>
        <Portfolios/>
        <Testimonials/>
        <Footer/>
        {/* <Test/> */}

    </div>
  
     

      

    
    
  )
}

export default App