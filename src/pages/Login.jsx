import React from "react";
import "../styles/Login.css"
const Login = ()=>{
    return(
        <div id="main-login-div" className="flex justify-center items-center">
            <main className="text-white rounded-lg flex flex-col justify-center items-center">

                <span className="mb-24 text-2xl font-medium">
                    <button>Login</button>
                    /
                    <button>Register</button>
                </span>
                <form className="mb-28">
                    <label for="uname" className="font-semibold">User name:</label><br/>
                    <input name="umane" className="rounded-md h-8 outline-none bg-slate-600 p-2"/><br/>
                    <label for="upasword" className="font-semibold">User password:</label><br/>
                    <span className="flex items-center">
                        <input name="upasword" type="password" className="rounded-md h-8 outline-none bg-slate-600 p-2"/>
                        <input className="w-5 h-5 ml-8" type="checkbox" onClick={document.getElementsByName("upasword").type="text"}/>
                    </span>
                    <button className="p-5 rounded-md text-lg font-semibold flex justify-center items-center mt-8 " id="button-account">Create account</button>
                </form>
            </main>
            
        </div>
    )
}

export default Login;