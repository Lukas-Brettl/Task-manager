
import "../styles/Nav.css"

const Navbar = () =>{
    return(
    <nav id="navbar" className="flex justify-end items-center mt-5 absolute">
        <h1 className="text-white font-semibold text-5xl absolute left-12">TaskFlow</h1>
        <ul className="flex text-white font-medium">
        {navbar.map((item, index) => <li key={index} className="mr-6 text-lg cursor-pointer static">{item}</li>)}
        </ul>
        <div className="flex flex-col items-center rounded-lg w-12 h-12 ml-8 mr-5 cursor-pointer" id="profile-img">
            <div className="bg-white mt-1 rounded-full w-5 h-5"></div>
            <div className="bg-white w-7  h-3 absolute mt-7" id="profile-img-body"></div>
        </div>
    </nav>)
}
const navbar = ["About", "How works?", "Login/Register"]

export default Navbar;