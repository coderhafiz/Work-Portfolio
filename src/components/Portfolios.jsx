import { useState} from "react"
import Portfolio from "./Portfolio"


const Portfolios = () => {

  const [id, setId] = useState(0);

  

  const handleClick = (e) => {
    // e.preventDefault();
    const tabId =  e.target.id
    setId(tabId);

  }

  return (
    <div id="portfolio" className="w-full">


      <div className="flex justify-center ">
        <h1 className="text-5xl sm:text-7xl font-bold mt-10">PORTFOLIO</h1>
      </div>

      
     

      <div className="w-full flex place-content-center flex-row text-center px-1 my-20 sm:px-10">

                <input type="radio" name="nav" id="graphicsDesign" className="peer/graphicsDesign hidden" defaultChecked/>
                <input type="radio" name="nav" id="webDev" className="peer/webDev hidden"  />
                <input type="radio" name="nav" id="archViz" className="peer/archViz hidden"  />
                <label id="0" htmlFor="graphicsDesign" className="cursor-pointer border-slate-300 border-b-2 border-t-0 border-x-0 w-full peer-checked/graphicsDesign:font-bold peer-checked/graphicsDesign:border-b-2 peer-checked/graphicsDesign:border-black " onClick={handleClick}>GRAPHIC DESIGN</label>
                <label id="1" htmlFor="webDev" className="cursor-pointer border-slate-300 border-b-2  border-t-0 border-x-0  w-full peer-checked/webDev:font-bold peer-checked/webDev:border-b-2 peer-checked/webDev:border-black" onClick={handleClick}>WEB DEV</label>
                <label id="2" htmlFor="archViz" className="cursor-pointer border-slate-300 border-b-2 border-t-0 border-x-0  w-full peer-checked/archViz:font-bold peer-checked/archViz:border-b-2 peer-checked/archViz:border-black" onClick={handleClick}>ARCH VIZ</label>
        </div>

      <Portfolio id={id} />

    </div>
  )
}

export default Portfolios