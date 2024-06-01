import React, { useEffect, useState } from "react";

const Repeat = () => {
  const [task_time, setTask_time] = useState("");
  const [task_text, setTask_text] = useState("");

  function update(a, b) {
    setTask_time(a);
    setTask_text(b);
  }

  useEffect(() => {

    const interval = setInterval(() => {
        
      let d = new Date()
      let minutes = d.getMinutes()
      let hours = d.getHours()
      hours = hours < 10 ? "0" + hours : hours
      minutes = minutes < 10 ? "0" + minutes : minutes

      const tasks = JSON.parse(localStorage.getItem("tasks"))
      tasks.forEach((object) => {
        if (object.time === `${hours}:${minutes}`) {
          update(object.time, object.text)
        };
      });
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (task_time !== "") {
      window.alert(`Time: ${task_time}, Task: ${task_text}`)
    };
  }, [task_time]);
};

export default Repeat;