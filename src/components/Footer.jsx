import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };



  return (
    <div>
        <footer className="footer p-10 bg-black text-neutral-content">
            <aside>
              <div className="flex-1 font-extrabold text-2xl ">
                  <Link onClick={scrollToTop} className='active:scale-95' ><span className='text-blue-700'>CG</span>mark</Link>
              </div>
                
                <p>© 2024 - All right reserved by CGmark</p>
            
            </aside> 
            <nav className='font-bold'>
                <h6 className="footer-title">Social</h6> 
                <div className="grid grid-flow-col gap-4">
                <a><p>Twitter</p></a>
                <a href='/'><p>Whatsapp</p></a>
                <a><p>Facebook</p></a>
                <a href=' /'><p>Instagram</p></a>
                </div>
            </nav>
        </footer>

    </div>
  )
}

export default Footer