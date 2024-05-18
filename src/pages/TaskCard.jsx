import "../styles/TaskCard.css";
import { useEffect, useState } from "react";
import React from "react";

const TaskCard = (props) => {
  const [donetask, setDonetask] = useState(false);
  const [cardObject, setCardObject] = useState({
    text: '',
    time: ''
  });

  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  useEffect(() => {
    localStorage.setItem(props.keystorage, JSON.stringify(cardObject));
   
  }, [cardObject, props.keystorage]);

  const handleTextChange = (e) => {
    setCardObject((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setCardObject((prev) => ({ ...prev, time: e.target.value }));
  };

  return (
    <div className="absolute z-10 top-40 left-48 flex flex-col" id="main-card-div">
      <span className="flex text-white items-center" id="card-info">
        <h2>You</h2>
        <img src="../icons8-alarm-clock-100.png" className="w-6 h-6" alt="alarm clock" />
        {donetask ? (
          <span className="bg-transparent border-transparent outline-none text-white text-2xl" id="card-time">
            {hours}:{minutes}
          </span>
        ) : (
          <input
            placeholder={`${hours}:${minutes}`}
            className="bg-transparent border-transparent outline-none text-white text-2xl"
            onChange={handleTimeChange}
            id="card-time"
            autoFocus
            type="text"
          />
        )}
      </span>
      {donetask ? (
        <span id="card-text" className="bg-transparent border-transparent outline-none text-white">
          {cardObject.text}
        </span>
      ) : (
        <input
          id="card-text"
          className="bg-transparent border-transparent outline-none text-white"
          placeholder="Add some text"
          onChange={handleTextChange}
          autoFocus
        />
      )}
      <span id="card-edit" className="flex justify-between h-24">
        Edit task
        <img
          src="../icons8-done-100.png"
          alt="done"
          className="w-8 h-8 top-24 right-7 absolute cursor-pointer"
          onClick={() => {
            setDonetask((prev) => !prev);
          }}
        />
      </span>
    </div>
  );
};

export default TaskCard;
