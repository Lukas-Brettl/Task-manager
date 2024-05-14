import "../styles/Home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx"
import React from "react";

const App = () => {
  return (
    <div>
      <header className="flex flex-col items-center absolute">
        <Navbar/>
        <main className="flex flex-col items-center">

          <h1 className=" text-white font-bold text-center leading-tight">
            Stop wasting your time, schedule it
          </h1>
          <p className=" text-gray-400 font-medium mt-1">
            This website is about a Task-manager like To-do list, but with more functionality. 
            If you want to see the code for this website, go to my github: https://github.com/Lukas-Brettl/Task-manager
          </p>
          <span className="mt-8">
            <Link to="/you"><button className=" rounded-lg text-white w-28 h-10 font-medium">Get started</button></Link>
            <button className="text-white ml-5 font-medium">Learn more {"➜"}</button>
          </span>

        </main>
        
        
      </header>
      <div id="back-img">
        <div className=" rounded-full absolute" id="circle1"></div>
        <div className=" rounded-full absolute" id="circle2"></div>
        <div className=" rounded-full absolute" id="circle3"></div>
        <div className=" rounded-full absolute" id="circle4"></div>
        <div className=" rounded-full absolute" id="circle5"></div>
        <div className=" rounded-full absolute" id="circle6"></div>
      </div>
      <section>
        
        <main></main>
      </section>

      <footer></footer>
    </div>
  );
};


export default App;