// src/pages/You.jsx
import React, { useState, useEffect } from "react";
import "../styles/You.css";
import CalendarV2 from "../pages/CalendarV2";
import Navbar from "./Navbar";
import TaskCard from "./TaskCard";
import toast, { Toaster } from 'react-hot-toast';

const You = () => {
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    // Save tasks to localStorage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: "", time: "" },
    ]);
  };

  function toast_send(){
    
    toast.success('Successfully added task!')
  
  }


  return (
    <div id="main-div">
      <Navbar />
      <aside className="mt-24 rounded-md absolute">
        <nav className="flex mt-11">
          <div>
            <img src="../icons8-home-50.png" alt="home icon" />
            <img src="../icons8-add-task-48.png" alt="add task icon" />
            <img src="../icons8-progress-48.png" alt="progress icon" />
            <img src="../icons8-time-machine-50.png" alt="history icon" />
            <img src="../icons8-add-user-64.png" alt="add user icon" />
            <img src="../icons8-team-96.png" alt="team icon" />
          </div>
          <span className="text-white absolute" id="aside-nav-switch">
            {"›"}
          </span>
        </nav>
      </aside>
      <main className="flex">
        <CalendarV2 addTask={addTask} />
        <div className="task-list absolute top-36 left-36">
          {tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              setTasks={setTasks}
              tasks={tasks}
              index={index}
              toast_send={toast_send}
            />
          ))}
        </div>
      </main>
      <div className="absolute" id="back-color"></div>
      <Toaster />
    </div>
  );
};

export default You;
