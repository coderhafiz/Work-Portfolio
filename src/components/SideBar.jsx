import { useRef } from "react"

const SideBar = () => {
    const navRef = useRef()
  return (

    <div ref={navRef} className="w-[100vw] fixed top-0 bg-none  z-[1000] sm:hidden">
        <div className=" h-[100vh] w-[80vw] fixed  bg-white z-[2000]">
            content
        </div>
        <div onClick={() => navRef.current.classList.toggle("hidden")} className="w-[100vw] h-[100vh] fixed bg-slate-800 opacity-50 z-[1500]"><button>click</button></div>
    </div>
  )
}

export default SideBar