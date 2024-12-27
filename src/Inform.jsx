import React, { useState } from 'react'
import './index.css'

function Inform() {
  let [data,setdata] = useState({username:""})
  
  let sendDatafun=(e)=>{
    let {value,name} = e.target
    setdata({...data,[name]:value})
  }

  let handelsubmit=(e)=>{
    e.preventDefault()
    console.log(data)

  }

  return (
    <form onSubmit={handelsubmit}>
        <input type="text" placeholder='username' name='username' value={data.value} onChange={sendDatafun}/>
        <input type="text" placeholder='password' name='' />
        <input type="email" placeholder='email' />
        <input type="date" placeholder='dob' />      
        <input type="submit" placeholder='submit' />      
    </form>
  )
}

export default Inform
