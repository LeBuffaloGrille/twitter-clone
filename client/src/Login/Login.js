import React from 'react';

import "./Login.css"

function Login(){

    return(
        <div className="container">
            <input className="input1" type="text" name="username"></input>
            <input className="input2"type="text" name="username"></input>
            <button className="" name="loginBtn">Login</button>
        </div>
    );
}

export default Login;