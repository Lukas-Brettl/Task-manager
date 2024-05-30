// src/pages/You.jsx
import React, { useState, useEffect } from "react";
import "../styles/You.css";
import CalendarV2 from "../pages/CalendarV2";
import Navbar from "./Navbar";
import TaskCard from "./TaskCard";
import toast, { Toaster } from "react-hot-toast";
import internal from "stream";

const You = () => {
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [navexpand, setNavexpand] = useState(false);

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

  function toast_send() {
    toast.success("Successfully added task!");
  }

  

  return (
    <div id="main-div">
      <Navbar />

      {navexpand ? (
        <aside className="mt-24 rounded-md absolute p-8 pb-36">
          <nav className="flex w-40">
            <div className="flex justify-center items-center">
              <div>
                <img src="../icons8-home-50.png" alt="home icon" />
                <img src="../icons8-add-task-48.png" alt="add task icon" />
                <img src="../icons8-progress-48.png" alt="progress icon" />
                <img src="../icons8-time-machine-50.png" alt="history icon" />
                <img src="../icons8-add-user-64.png" alt="add user icon" />
                <img src="../icons8-team-96.png" alt="team icon" />
              </div>
              <ul>
                {nav_items.map((value, index) => (
                  <li key={index} className="text-white text-2xl font-semibold">
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <span
              className="text-white absolute"
              id="aside-nav-switch"
              onClick={() => setNavexpand((expand) => !expand)}
            >
              {"›"}
            </span>
          </nav>
        </aside>
      ) : (
        <aside className="rounded-md absolute mt-24 pb-36 p-8 flex ">
          <nav className="flex ">
            <div className="">
              <img src="../icons8-home-50.png" alt="home icon" />
              <img src="../icons8-add-task-48.png" alt="add task icon" />
              <img src="../icons8-progress-48.png" alt="progress icon" />
              <img src="../icons8-time-machine-50.png" alt="history icon" />
              <img src="../icons8-add-user-64.png" alt="add user icon" />
              <img src="../icons8-team-96.png" alt="team icon" />
            </div>
            <span
              className="text-white absolute"
              id="aside-nav-switch"
              onClick={() => setNavexpand((expand) => !expand)}
            >
              {"›"}
            </span>
          </nav>
        </aside>
      )}
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
      <div className="absolute bg-red-700 w-96 h-96" id="back-color"></div>
      <Toaster />
    </div>
  );
};

const nav_items = [
  "Home",
  "Add task",
  "Progress",
  "History",
  "Add user",
  "Team",
];

export default You;
