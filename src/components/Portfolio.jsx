import ArchViz from "./ArchViz"
import GraphicsDesign from "./GraphicsDesign"
import WebDev from "./WebDev"


const Portfolio = (id) => {

    const works= [<GraphicsDesign/>, <WebDev/>, <ArchViz/>]
    const tabId = id.id
    const showWorks = works[tabId]
    // console.log(showWorks)

  return (
    <>
       {showWorks}
    </>
  )
}

export default Portfolio