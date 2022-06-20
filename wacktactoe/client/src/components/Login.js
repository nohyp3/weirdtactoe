import React, {useState} from 'react'

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {

    }
  return (
    <div className="logIn">
    <label>Log In</label>
    <input placeholder="Username" onChange={(e) => {
        setUsername(e.target.value);
    }} />
    <input placeholder="Password" onChange={(e) => {
        setPassword(e.target.value);
    }} />
    <button onClick={login}>Log In!</button>
    </div>
  )
}

export default Login