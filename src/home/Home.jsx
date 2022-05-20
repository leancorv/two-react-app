import Navbar from "../components/Navbar"
import "./home.scss"

const home = () => {
  return (
        <div className='home'>
            <Navbar/>
            <img src="/assets/img/series/glee.jpg" alt="" />
        </div>
  )
}

export default home