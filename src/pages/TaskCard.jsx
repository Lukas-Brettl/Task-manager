// src/components/TaskCard.jsx
import "../styles/TaskCard.css";
import React, { useEffect, useState } from "react";

const TaskCard = ({ task, setTasks, tasks, index, toast_send}) => {
  


  const [donetask, setDonetask] = useState(false);
  const [cardObject, setCardObject] = useState(task);

  //if user press done button call dene function and than create toast
  function done(){
    setDonetask((prev) => !prev)
    toast_send()
  }

  useEffect(() => {
    setCardObject(task);
  }, [task]);

  const handleTextChange = (e) => {
    const newCardObject = { ...cardObject, text: e.target.value };
    setCardObject(newCardObject);
    updateTasks(newCardObject);
  };

  const handleTimeChange = (e) => {
      if(e.target.value.length <6){
        const newCardObject = { ...cardObject, time: e.target.value };
        setCardObject(newCardObject);
        updateTasks(newCardObject);
      
      }


  };

  const updateTasks = (newCardObject) => {
    const updatedTasks = tasks.map((t) =>
      t.id === newCardObject.id ? newCardObject : t
    );
    setTasks(updatedTasks);
  };

  const marginTop = index * 150 + "px";

  return (
    <div
      className="absolute z-10 flex flex-col left-24"
      id="main-card-div"
      style={{ marginTop }}
    >
  
      <span className="flex text-white items-center" id="card-info">
        <h2>You</h2>
        <img
          src="../icons8-alarm-clock-100.png"
          className="w-6 h-6"
          alt="alarm clock"
        />
        {donetask ? (
          <span
            className="bg-transparent border-transparent outline-none text-white text-2xl"
            id="card-time"
          >
            {cardObject.time}
          </span>
        ) : (
          <input
            placeholder={`${hours}:${minutes}`}
            className="bg-transparent border-transparent outline-none text-white text-2xl"
            onChange={handleTimeChange}
            value={cardObject.time}
            id="card-time"
            autoFocus
            type="text"
          />
        )}
      </span>
      {donetask ? (
        <span
          id="card-text"
          className="bg-transparent border-transparent outline-none text-white"
        >
          {cardObject.text}
        </span>
      ) : (
        <input
          id="card-text"
          className="bg-transparent border-transparent outline-none text-white"
          placeholder="Add some text"
          onChange={handleTextChange}
          value={cardObject.text}
          autoFocus
        />
      )}
      <span id="card-edit" className="flex justify-between h-24">
        Edit task
        <img
          src="../icons8-done-100.png"
          alt="done"
          id="done"
          className="w-8 h-8 top-24 right-7 absolute cursor-pointer"
          onClick={done}
          
        />
      </span>
      
    </div>
  );
};

const d = new Date
const hours = d.getHours()
const minutes = d.getMinutes()

export default TaskCard;
