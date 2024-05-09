import "../styles/You.css"

import Navbar from "./Navbar.jsx"
import Calendar from "./Calendar.jsx"

const You = () => {
    return(
        <div id="main-div">

            <Navbar/>
            
           
            <aside className="mt-24 rounded-md absolute ">
                <nav className=" mt-11">
                    <ul>
                        {aside_nav.map(item => <li className="text-white font-medium mb-6 text-xl" key={aside_nav[item]}>{item}</li>)}
                    </ul>
                </nav>
            </aside>
            <main><Calendar/></main>
            <div className="absolute" id="back-color"></div>
        </div>
        
      
    )
}
const aside_nav = ["Add Task", "Completed", "Incomplete", "History", "Add User", "Team:"]
export default You;
