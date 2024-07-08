
const Hero = () => {
  return (
    
      <div className="hero min-h-screen bg-white w-full px-5 ">
        <div className="hero-content flex-col sm:flex-row place-items-center gap-5 sm:gap-52 ">
          {/* <img src="" className="max-w-sm rounded-lg shadow-2xl" alt="Hero image" /> */}
          <div className="h-[68px] w-[68px] sm:h-[50vh] sm:w-[50vh] bg-black rounded-full "></div>
          <div className="flex flex-col place-content-center gap-5">
            <h1 className="text-5xl font-bold text-center"><span className="text-blue-700"> CG</span> DESIGNER <br />/<br /> <span className="text-blue-700">WEB</span> DEVELOPER
            </h1>
            <p className="py-6 text-center font-bold text-xl sm:w-96">
              INTEGRATING 2D AND 3D DIGITAL GRAPHICS CONTENT TO THE WEB AND MOBILE DEVICES.
            </p> 
           
            <button className="btn btn-primary self-center sm:w-52">CONTACT</button>
          </div>
        </div>
      </div>

  )
}

export default Hero