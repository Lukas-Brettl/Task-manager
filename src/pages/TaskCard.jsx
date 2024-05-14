import "../styles/TaskCard.css"
import React from "react";

const TaskCard = () =>{
    return(
    <div className="absolute z-10 top-40 left-48 flex flex-col" id="main-card-div">
        <span className="flex text-white items-center" id="card-info">
            <h2>You</h2>
            <img src="../icons8-alarm-clock-100.png" className="w-6 h-6"></img>
            <input placeholder={hours + ":" + minutes} className=" bg-transparent border-transparent outline-none text-white text-2xl" id="card-time" autoFocus type="text"></input>
        </span>
        <input id="card-text" className=" bg-transparent border-transparent outline-none text-white" placeholder="Add some text" value={JSON.parse(localStorage.getItem("card"))} onChange={(e) => send_storage(e.target.value)}  autoFocus></input>
        <span id="card-edit">Edit task</span>
    </div>
    )
}



const d = new Date
let hours = d.getHours()
let minutes = d.getMinutes()

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;

const card_time = document.getElementById("card-time")

function send_storage(e){
    let saveValue = localStorage.setItem("card", e)
    return saveValue
}

if(card_time){
    card_time.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
            
            card_time.value = hours + ":" + minutes;
        }
    })
}

export default TaskCard
