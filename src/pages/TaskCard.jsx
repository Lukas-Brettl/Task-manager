import "../styles/TaskCard.css"
const TaskCard = () =>{
    return(
    <div className="absolute z-10 top-40 left-36 flex flex-col" id="main-card-div">
        <span className="flex text-white items-center" id="card-info">
            <h2>You</h2>
            <img src="../icons8-alarm-clock-100.png" className="w-6 h-6"></img>
            <h2>{hours + ":" + minutes}</h2>
        </span>
        <span id="card-text">Some text</span>
        <span id="card-edit">Edit task</span>
    </div>
    )
}
export default TaskCard

const d = new Date
let hours = d.getHours()
let minutes = d.getMinutes()

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;