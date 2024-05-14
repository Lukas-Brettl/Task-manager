import "../styles/Calendar.css"
import React from "react"

const Calendar = () =>{
    return(
        <div className="rounded-xl" id="calendar-main-div">
          

             <span className="text-white font-medium text-3xl ">
                May 2024
                <button className="text-lg right-4 top-2 rounded-md w-24 h-10 absolute">Add Task</button>
                <button className="text-lg rounded-md border-2 w-28 h-10 absolute right-32 mt-2">Week view ˅</button>
            </span>
            <main>
                
                <table className="ml-3 mt-5 absolute">
                    <tr id="days_in_table">
                    {days.map((item, index) => <th key={index} className="text-white ml-7 mr-7 text-2xl font-semibold">{item}</th>)}
                    </tr>
                    <tr>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                    </tr>
                    <tr>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                    </tr>
                    <tr>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                    </tr>
                    <tr>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                    </tr>
                    <tr>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                        <td className="text-white font-medium w-24 h-16"></td>
                    </tr>
                </table>
            </main>
        </div>
    )
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default Calendar