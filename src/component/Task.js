import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Task({ task }) {
  const dispatch = useDispatch();
  const [showEditInput, setShowEditInput] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);
  const [isDone, setIsDone] = useState(false);

  const toggleEditInput = () => {
    setShowEditInput(!showEditInput);
  };

  const handleEdit = () => {
    toggleEditInput();
  };

  const handleSave = () => {
    if (newTaskName !== task.name) {
      const updatedTask = { ...task, name: newTaskName };
      dispatch(editTask(updatedTask));
      toggleEditInput();
    }
  };

  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleDoneToggle = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <div className={`modal ${isDone ? 'done' : ''}`} style={{ display: 'flex', position: 'initial' }}>
        <Modal.Dialog>
          <Modal.Body style={{backgroundColor:'#BFFFF0'}}>
            <h3>
              {isDone && (
                <FontAwesomeIcon icon={faCheck} style={{ marginRight: '8px', color: '#064635' }} />
              )}
              {task.name}
            </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={toggleEditInput} style={{backgroundColor:'#B5F1CC',color:'black',fontWeight: 'bold'}}>
              Edit
            </Button>
            <Button
              variant={isDone ? 'danger' : 'success'} // Utilisez 'danger' pour rouge et 'success' pour vert
              onClick={handleDoneToggle}
            >
              {isDone ? 'Undone' : 'Done'}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>

      <Modal show={showEditInput} onHide={toggleEditInput} >
        <Modal.Header closeButton style={{backgroundColor:'#163020', color: 'white', fontWeight: 'bold' }}>
          <Modal.Title >Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor:'#739072'  }}>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                value={newTaskName}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </ Modal.Body >
        <Modal.Footer style={{ backgroundColor:'#304D30' }}>
          <Button variant="secondary" onClick={toggleEditInput} style={{backgroundColor:'#B5F1CC',color:'black',fontWeight: 'bold'}}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} style={{backgroundColor:'#B5F1CC',color:'black',fontWeight: 'bold'}}>
            Save Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
