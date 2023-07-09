import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GrDocumentUpdate } from 'react-icons/gr'
import Task from './Task'
const TaskCards = ({title, body, id, delid, display, updateId, toBeUpdate}) => {
    const handleDelete = () => {
        delid(id);
      };
    return (
        <div className='p-3 todo-card'>
            <div>
            <h4>{title}</h4>
            <p className='todo-card-p'>{body} </p>
        </div>
        <div className='d-flex justify-content-around'>
            <div className='d-flex justify-content-around card-icon-head px-2 py-1'
             onClick={()=>{
                 toBeUpdate(updateId);
               display("block");
        }}>
                <GrDocumentUpdate className="card-icons " /> Update
                </div>
                <div className='d-flex justify-content-around card-icon-head px-2 py-1 text-danger' 
                // onClick={()=>{
                  
                //         delid={id};
                // }}>
                onClick={handleDelete}>
                    <AiFillDelete className="card-icons del" /> Delete
                    </div>
            </div>
        </div>
    )
}

export default TaskCards