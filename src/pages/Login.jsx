import React from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "../styles/Login.css"

const Login = ()=>{
    const [showpassword, setShowpassword] = useState(false)
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [focusn, setFocusn] = useState(false)
    const [focusp, setFocusp] = useState(false)
    const [focuse, setFocuse] = useState(false)
    const [sign, setSign] = useState(true)
    

    function welcome(){
        if(name && password){
            toast(`Welcome ${name}`,{
                style:{
                    background: "#25374f",
                    color: "white",
                    paddingInline: "30px"
                }
            })
        }
    
    }

    return(
        <div id="main-login-div" className="flex justify-center items-center">
            {sign ? 
            <main className="text-white rounded-lg flex flex-col items-center">
                
                    <span className="text-2xl mb-24 mt-8 font-medium">
                        <button onClick={() =>setSign(true)}>Login</button>
                        /
                        <button onClick={()=>setSign(false)}>Register</button>
                    </span>
                    <div>
                    <label className="font-semibold mt-14">User name:</label><br/>
                    <input name="uname" onFocus={() =>setFocusn((focus) => !focus)} onBlur={() => setFocusn(false)}
                        style={focusn ? {boxShadow: "0 0 3px #558dff"} : null} onChange={(e) =>(setName(e.target.value))} className="rounded-md mb-3 h-8 w-56 outline-none p-2" required/><br/>
                    <label  className="font-semibold ">User password:</label><br/>
                    <span className="flex items-center">
                        <input name="upassword" onFocus={() =>setFocusp((focus) => !focus)} onBlur={() => setFocusp(false)}
                        style={focusp ? {boxShadow: "0 0 3px #558dff"} : null} onChange={(e) =>(setPassword(e.target.value))} className="rounded-md mb-3 h-8 w-56 outline-none p-2" type={showpassword ? "text" : "password"} required/>
                        <input className="w-5 h-5 ml-8 outline-none " type="checkbox" onClick={() => setShowpassword((show) => !show)}/>
                    </span>
                    <button className="p-5 rounded-md text-lg font-semibold flex justify-center items-center mt-8 " id="button-account" onClick={welcome}>Create account</button>
                </div>
            </main>
            
            :
            
            <main className="text-white rounded-lg flex flex-col items-center">
                
                    <span className="text-2xl mb-14 mt-8 font-medium">
                        <button onClick={() =>setSign(true)}>Login</button>
                        /
                        <button onClick={()=>setSign(false)}>Register</button>
                    </span>
                <div>
                    <label className="font-semibold mt-14">User name:</label><br/>
                    <input name="uname" onFocus={() =>setFocusn((focus) => !focus)} onBlur={() => setFocusn(false)}
                        style={focusn ? {boxShadow: "0 0 3px #558dff"} : null} onChange={(e) =>(setName(e.target.value))} className="rounded-md mb-3 h-8 w-56 outline-none p-2" required/><br/>
                    <label className="font-semibold mt-14">E-mail:</label><br/>
                    <input type="email" name="email" onFocus={() =>setFocuse((focus) => !focus)} onBlur={() => setFocuse(false)}
                        style={focuse ? {boxShadow: "0 0 3px #558dff"} : null} className="rounded-md mb-3 h-8 w-56 outline-none p-2" required/><br/>
                    <label  className="font-semibold ">Password:</label><br/>
                    <span className="flex items-center">
                        <input name="upassword" onFocus={() =>setFocusp((focus) => !focus)} onBlur={() => setFocusp(false)}
                        style={focusp ? {boxShadow: "0 0 3px #558dff"} : null} onChange={(e) =>(setPassword(e.target.value))} className="rounded-md mb-3 h-8 w-56 outline-none p-2" type={showpassword ? "text" : "password"} required/>
                        <input className="w-5 h-5 ml-8 outline-none " type="checkbox" onClick={() => setShowpassword((show) => !show)}/>
                    </span>
                    <button className="p-5 rounded-md text-lg font-semibold flex justify-center items-center mt-8 " id="button-account" onClick={welcome}>Create account</button>
                </div>
            </main>}
            <Toaster />
        </div>
    )
}



export default Login;