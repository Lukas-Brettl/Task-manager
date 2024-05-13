import "../styles/You.css"
import CalendarV2 from"../pages/CalendarV2.jsx"

import Navbar from "./Navbar.jsx"
import TaskCard from "./TaskCard.jsx"


const You = () => {

    return(
        <div id="main-div">

            <Navbar/>
            
           
            <aside className="mt-24 rounded-md absolute ">
                <nav className="flex mt-11">
                    <div>
                        <img src="../icons8-home-50.png" alt="home icon" />
                        <img src="../icons8-add-task-48.png" alt="add task icon" />
                        <img src="../icons8-progress-48.png" alt="progress icon" />
                        <img src="../icons8-time-machine-50.png" alt="history icon" />
                        <img src="../icons8-add-user-64.png" alt="add user icon" />
                        <img src="../icons8-team-96.png" alt=" team icon" /> 
                    </div>
                    <span className="text-white absolute" id="aside-nav-switch" >{"›"}</span>
                    <div>
                    {/* <ul>
                            {aside_nav.map(item => <li className="text-white font-medium mb-6 text-xl" key={aside_nav[item]}>{item}</li>)}
                        </ul>*/}
                    </div>

                </nav>
            </aside>
            <main className="flex">
                <CalendarV2 />
                <TaskCard/>
            </main>
            <div className="absolute" id="back-color"></div>
        </div>)
    }
    
        
      
    
    

const aside_nav = ["Home", "Add Task", "Progress", "History", "Add User", "Team:"]



export default You;