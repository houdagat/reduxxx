import React from 'react'
import { useState } from 'react'
import { addTask } from '../redux/action'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {v1 as uuid}from "uuid";
function Addtask() {
    const dispatch= useDispatch();
    const [name,setName]=useState('')
    const [input, setInput]= useState("");
    const addHandler=()=>{
        dispatch(addTask({id:uuid(),name:name}))
        setName(''); 
        
    }
   
   
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial'  }}
  >
    <Modal.Dialog >
      <Modal.Header style={{ backgroundColor:'#163020',color:'white' }} >
        <Modal.Title>Task To ADD : </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor:'#86A789' }} >
      <input type="text" style={{backgroundColor:'white'}} placeholder=" Type task to add" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor:'#304D30' }} >
       
        <Button onClick={addHandler} style={{backgroundColor:'#163020'}}> ADD_TASK</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
    

  )
}

export default Addtask