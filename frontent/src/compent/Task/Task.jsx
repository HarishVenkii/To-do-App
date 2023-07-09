import React, {useState, useEffect} from "react";
import TaskCards from './TaskCards'
import "./Task.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import axios from "axios";

let toUpdateArr = [];
let Id = sessionStorage.getItem("id");

const Task = () => {
    const [Inputs, setInputs] = useState({title:"",body: ""});
    const [Array, setArray] = useState([]);

    
const show = () => { 
    document.getElementById("textarea").style.display="block";
};
const change = (e)=>{
const {name, value} = e.target;
setInputs({...Inputs, [name]:value});
};
const sumbit = async()=> {
    if(Inputs.title==="" || Inputs.body===""){
        toast.error("Please fill the Task")
    }else{ 
        if(Id){
             await axios.post("http://localhost:8000/api/v2/addTask",
             {title:Inputs.title,body:Inputs.body,id:Id,})
             .then((response)=>{
                console.log(response)
                setArray(response)
             });
             //setArray([...Array, Inputs])
             setInputs({title:"",body: ""}) 
             toast.success("Your Task is Added..!!")
             
        }else{
            setArray([...Array, Inputs])
            setInputs({title:"",body: ""})
            toast.success("Your Task is Added..!!")
            toast.error("Your Task is Not saved, please SingUp")
        }
       
    }   
}
const del1 = async (Cardid)=>{
    if(Id){
        await axios.delete('http://localhost:8000/api/v2/deleteTask/${Cardid}',{data: {id:Id}})
        .then(()=>{
        toast.success("Your task is Deleted")
        })
    } else{
        toast.error("Please login first")
    }

// console.log(id);
// Array.splice(id, "1");
// setArray([...Array])
}
const dis = (value) =>{
document.getElementById("todo-update").style.display = value;}
const update = (value)=>{
    toUpdateArr = Array[value];
}
useEffect(()=>{
    if(Id){
        const fetch = async()=> {
            await axios.get('http://localhost:8000/api/v2/gettasks/${id}')
            .then((response)=>{
                console.log(response.data.list)
        setArray(response.data.list); 
            });
        };
        fetch();
            }       
    else{
     toast.error("Please login first")
    }
}, [sumbit]) 

    return (
<>
<div className="container-xxl bg-white p-0">
        <div className="todo" >
            <h1>Welcome Add your Task Here..!!</h1>
<ToastContainer />
            <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column" >

                <div className="d-flex flex-column todo-inputs-div w-50 p-1">

                    <input 
                    type="text" placeholder="TITLE" 
                    className="my-2 p-2 todo-inputs"
                    onClick={show} 
                    name="title"
                    value={Inputs.title}
                    onChange={change}
                    />

                    <textarea id="textarea" 
                    type="text" placeholder="BODY" 
                    className="p-2 todo-inputs"
                    name="body"
                    value={Inputs.body}
                    onChange={change}/>

                    

                </div>
                <div className=" w-50 d-flex justify-content-end my-3">
                <button className= "home-btn px-2 py-1" onClick={sumbit}>Add</button>
</div>
            </div >

        <div className="todo-body">
            <div className="container-fluid">
                <div className="row">
                   
                {Array && 
                  Array.map((item,index) => (
                <div className="col-lg-3 col-10 mx-5 my-2" key={index}> 
                <TaskCards title={item.title} 
                body={item.body} 
                id={item._id} 
                delid={del1} 
                display={dis}
                updateId={index}
                toBeUpdate={update}
                /> 
                <script>
                    console.log(item,index)
                </script>
                </div>))} 
                </div>
                </div>
                
           
        </div>


        </div >
        <div className ="todo-update" id="todo-update">
            <div className="container update"><Update 
            display={dis} 
            update = {toUpdateArr}
            /></div>
            
        </div>
        </div>
     
</>
    )
};


export default Task;

