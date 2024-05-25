import React from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "../styles/Login.css"

const Login = ()=>{
    const [showpassword, setShowpassword] = useState(false)
    const [name, setName] = useState()
    const [password, setPassword] = useState()

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
            <main className="text-white rounded-lg flex flex-col items-center">
                
                    <span className="text-2xl mb-24 mt-8 font-medium">
                        <button>Login</button>
                        /
                        <button>Register</button>
                    </span>
                    <div>
                    <label className="font-semibold mt-14">User name:</label><br/>
                    <input name="uname" onChange={(e) =>(setName(e.target.value))} className="rounded-md mb-3 h-8 outline-none bg-slate-600 p-2"/><br/>
                    <label  className="font-semibold ">User password:</label><br/>
                    <span className="flex items-center">
                        <input name="upassword" onChange={(e) =>(setPassword(e.target.value))} type={showpassword ? "text" : "password"} className="rounded-md h-8 outline-none bg-slate-600 p-2"/>
                        <input className="w-5 h-5 ml-8 outline-none bg-slate-600" type="checkbox" onClick={() => setShowpassword((show) => !show)}/>
                    </span>
                    <button className="p-5 rounded-md text-lg font-semibold flex justify-center items-center mt-8 " id="button-account" onClick={welcome}>Create account</button>
                </div>
            </main>
            <Toaster />
        </div>
    )
}



export default Login;