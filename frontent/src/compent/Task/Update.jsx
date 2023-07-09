import React, {useState, useEffect} from 'react'
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
const Update = ({display, update}) => { 
    useEffect (()=>{
        setInputs({
        title: update.title,
        body: update.body})
    },[update]) 
    const [Inputs, setInputs] = useState({
        title: "",
        body: ""
    })
    const change = (e)=>{
const {name, value} = e.target;
setInputs({...Inputs, [name]:value})
    }
    const sumbit = async ()=>{
        await axios.put('http://localhost:8000/api/v2/updateTask/${update.id}', Inputs)
        .then((response)=>{
console.log(response)
toast.success("Your task is Deleted")
        })
        display("none");
    }
    return (
        <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
            <h4>Update Your Task</h4>
            <input name="title" type="text" className="todo-inputs my-4 w-100 p-3" 
            value={Inputs.title} onChange={change} />
            <textarea name = "body" className="todo-inputs w-100 p-3" 
            value={Inputs.body} onChange={change}/>
            <div>
            <button className="btn btn-dark my-4" onClick={sumbit}>UPDATE </button>
            <button className="btn btn-danger my-4 mx-3" 
            onClick={()=>{display("none ")}} >Close</button>
</div>
        </div>)
}

export default Update