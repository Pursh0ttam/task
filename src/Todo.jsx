import React, { useState } from 'react'

function Todo() {
    let [task,settask] = useState("")
    let [todo,settod] = useState([])
    let inputValue =({target:{value}})=>{
        settask(value)
    }
    let addTask=()=>{
        settod([...todo,task])
        settask("")
    }
   let del =(i)=>{
    settod(todo.filter((ele,index)=>{
        return index!=i
    }))

   }

  return (
    <div>
        <input type="text"  value={task} onChange={inputValue}/>
        <button onClick={addTask}>Add Task</button>
        {todo.map((ele,i)=>{
            return <div key={i}>
                {ele}
                <button onClick={()=>{del(i)}}>delete</button>
            </div>
        })}
      
    </div>
  )
}

export default Todo
