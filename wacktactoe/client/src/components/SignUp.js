import React, {useState} from 'react'

function SignUp() {
    const [user,setUser] = useState(null)
    const signup = () => {

    }
  return (
    <div className="signUp">
        <label>Sign Up</label>
        <input placeholder="First Name" onChange={(e) => {
            setUser({...user, firstName: e.target.value});
        }} />
        <input placeholder="Last Name" onChange={(e) => {
            setUser({...user, lastName: e.target.value});
        }} />
        <input placeholder="Username" onChange={(e) => {
            setUser({...user, lastName: e.target.value});
        }} />
        <input placeholder="Password" onChange={(e) => {
            setUser({...user, lastName: e.target.value});
        }} />
        <button onClick={signup}>Sign Up!</button>
    </div>
  )
}

export default SignUp