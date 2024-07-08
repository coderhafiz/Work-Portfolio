import Testimonial from "./Testimonial"

const Testimonials = () => {
  return (
    <div id="testimonial">
        <div className="flex justify-center my-10 ">
            <h1 className="text-3xl sm:text-7xl font-bold">TESTIMONIALS</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 mx-5 my-5 justify-center">

            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </div>

           

    
    </div>
  )
}

export default Testimonials