import "./App.css";

const App = () => {
  return (
    <div>
      <header className="flex flex-col items-center absolute">
        <nav className="flex justify-end items-center mt-5 absolute">
          <h1 className="text-white font-semibold text-5xl absolute left-12">TaskFlow</h1>
          <ul className="flex text-white font-medium">
            {navbar.map(item => <li className="mr-6 text-lg cursor-pointer static">{item}</li>)}
          </ul>
          <div className="flex flex-col items-center rounded-lg w-12 h-12 ml-8 mr-5 cursor-pointer" id="profile-img">
            <div className="bg-white mt-1 rounded-full w-5 h-5"></div>
            <div className="bg-white w-7  h-3 absolute mt-7" id="profile-img-body"></div>
          </div>

        </nav>
        <main className="flex flex-col items-center">

          <h1 className=" text-white font-bold text-center leading-tight">
            Stop wasting your time, schedule it
          </h1>
          <p className=" text-gray-400 font-medium mt-1">
            This website is about a Task-manager like To-do list, but with more functionality. 
            If you want to see the code for this website, go to my github: https://github.com/Lukas-Brettl/Task-manager
          </p>
          <span className="mt-8">
            <button className=" rounded-lg text-white w-28 h-10 font-medium">Get started</button>
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

const navbar = ["About", "How works?", "Login/Register"]

export default App;
