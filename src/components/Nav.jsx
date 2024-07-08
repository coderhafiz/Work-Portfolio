import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };



  return (

    <div>



        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

        {/* <div className="drawer-content flex flex-col">
        
            <div className="w-full navbar shadow-lg fixed z-[1000] bg-white">
                <div className="flex-none lg:hidden ">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="flex-1 px-2 mx-2">CGmark</div>
                
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal">
                    
                    <li className='active:text-blue-700'><Link onClick={scrollToTop}>HOME</Link></li>
                    <li className='active:text-blue-700'><Link to="about" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >ABOUT US</Link></li>
                    <li className='active:text-blue-700'><Link to="resume" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-60} 
                                  duration={500} >RESUME</Link></li>
                    <li className='active:text-blue-700'><Link to="portfolio" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >PORFOLIO</Link></li>
                    <li className='active:text-blue-700'><Link to="testimonial" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >TESTIMONIAL</Link></li>
                    </ul>
                </div>
            </div>
        
        </div>  */}

            <div className="drawer-content flex flex-col ">

              <div className="w-full navbar shadow-lg fixed z-[1000] bg-white">

                    <div className="flex-none lg:hidden">
                      <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </label>
                    </div> 

                    <div className="flex-1 px-2 mx-2 font-extrabold text-2xl ">
                        <Link onClick={scrollToTop} className='active:scale-95' ><span className='text-blue-700'>CG</span>mark</Link>
                    </div>

                    <div className="flex-none hidden lg:block">
                      <ul className=" flex justify-around gap-10 items-center mr-5">
                      <li tabIndex={0} className='active:text-blue-700 cursor-pointer '><Link onClick={scrollToTop}>HOME</Link></li>
                     <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="about" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >ABOUT ME</Link></li>
                     <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="resume" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-60} 
                                  duration={500} >RESUME</Link></li>
                     <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="portfolio" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >PORTFOLIO</Link></li>
                     <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="testimonial" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >TESTIMONIALS</Link></li>
                    
                        
                        
                      </ul>
                    </div>
              </div>
            </div> 


       
         <div className="drawer-side  z-[1000]">
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay h-full"></label> 
              <ul className=" p-4 w-80 min-h-full flex flex-col gap-10 place-items-center pt-10  bg-black  text-white relative text-3xl ">
                
              <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link onClick={scrollToTop}>HOME</Link></li>
            <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="about" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >ABOUT ME</Link></li>
            <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="resume" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >RESUME</Link></li>
            <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="portfolio" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >PORTFOLIO</Link></li>
            <li tabIndex={0} className='active:text-blue-700 cursor-pointer'><Link to="testimonial" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} >TESTIMONIALS</Link></li>
                    

                  <footer className="footer footer-center px-5 landscape:p-5  bg-transparent rounded text-white absolute landscape:relative bottom-0 landscape:scale-75 landscape:flex landscape:justify-center  landscape:flex-col landscape:overflow-scroll">
                    <nav className='flex flex=col items-start'>
                        <div className="grid grid-flow-col gap-4 font-bold scale-75">
                            <a><p>Twitter</p></a>
                            <a href='/'><p>Whatsapp</p></a>
                            <a><p>Facebook</p></a>
                            <a href=' /'>  <p>Instagram</p></a>
                        </div>
                    </nav> 
                    <aside>
                        <p>Copyright © 2024 - All right reserved by CGmark</p>
                    </aside>
                  </footer>
                  
                  
              </ul>
                  {/* content */}
                  
            </div>
        </div>
    </div>

    // <div>

    //         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" classNameName="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    //         <span classNameName="sr-only">Open sidebar</span>
    //         <svg classNameName="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //             <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    //         </svg>
    //         </button>

    //         <aside id="default-sidebar" classNameName="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
    //             <div classNameName="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    //                 <ul classNameName="space-y-2">
    //                     <li className='active:text-blue-700'>
    //                         <Link href="#" classNameName="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    //                             <svg aria-hidden="true" classNameName="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
    //                             <span classNameName="ml-3">Overview</span>
    //                         </Link>
    //                     </li>
                        
    //                 </ul>
    //             </div>
    //         </aside>

    // </div>



        // <div classNameNameName="navbar bg-base-100 drop-shadow-lg">

        //     <div classNameNameName="navbar-start">
        //         <Link classNameNameName="btn btn-ghost text-xl">CGmark</Link>
        //     </div>

        //     <div classNameNameName="navbar-end">
        //         <div classNameNameName="dropdown">
        //             <div tabIndex="0" role="button" classNameNameName="btn btn-ghost btn-circle">
        //                 <svg xmlns="http://www.w3.org/2000/svg" classNameNameName="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        //             </div>
        //             {/* <ul tabIndex="0" classNameNameName="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li className='active:text-blue-700'><Link onClick={scrollToTop}>Homepage</Link></li>
        //                 <li className='active:text-blue-700'><Link to="about" 
                                 
        //                 <li className='active:text-blue-700'><Link to="about" 
                                
        //             </ul> */}
        //         </div>
        //     </div>

    

           

        //     {/* <div classNameNameName="navbar-end">
        //         <button classNameNameName="btn btn-ghost btn-circle">
        //             <svg xmlns="http://www.w3.org/2000/svg" classNameNameName="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoL="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        //         </button>
        //         <button classNameNameName="btn btn-ghost btn-circle">
        //             <div classNameNameName="indicator">
        //                 <svg xmlns="http://www.w3.org/2000/svg" classNameNameName="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoL="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        //                 <span classNameNameName="badge badge-xs badge-primary indicator-item"></span>
        //             </div>
        //         </button>
        //     </div> */}

        // </div>

  )
}

export default Nav