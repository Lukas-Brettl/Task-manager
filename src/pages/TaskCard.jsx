import "../styles/TaskCard.css"
import { useState } from "react";
import React from "react";

const TaskCard = (props) =>{
    
    const [donetask, setDonetask] = useState(false)



    function send_data_to_storage(e){

        localStorage.setItem(props.keystorage, JSON.stringify(e))
    }
    return(
    <div className="absolute z-10 top-40 left-48 flex flex-col" id="main-card-div">
        <span className="flex text-white items-center" id="card-info">
            <h2>You</h2>
            <img src="../icons8-alarm-clock-100.png" className="w-6 h-6"></img>
            {donetask ? (<span  className=" bg-transparent border-transparent outline-none text-white text-2xl" id="card-time">{hours + ":" + minutes}</span>) : (<input placeholder={hours + ":" + minutes} className=" bg-transparent border-transparent outline-none text-white text-2xl" id="card-time" autoFocus type="text"></input>)}
        </span>
        {donetask ? <span id="card-text" className=" bg-transparent border-transparent outline-none text-white">{JSON.parse(localStorage.getItem(props.keystorage))}</span> : <input id="card-text" className=" bg-transparent border-transparent outline-none text-white" placeholder="Add some text" onChange={(e) => send_data_to_storage(e.target.value)}  autoFocus></input>}
        
        <span id="card-edit" className="flex justify-between h-24 ">Edit task
            <img src="../icons8-done-100.png" alt="done" className="w-8 h-8 top-24 right-7 absolute cursor-pointer" onClick={()=>{setDonetask(e => !e)}} />
        </span>
        
    </div>
    
    )
    
}





const d = new Date
let hours = d.getHours()
let minutes = d.getMinutes()

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;

const card_time = document.getElementById("card-time")







if(card_time){
    card_time.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
            
            card_time.value = hours + ":" + minutes;
        }
    })
}






export default TaskCard;
