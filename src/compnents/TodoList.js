import React, { useState } from 'react';
import CreateTask from '../models/createTask';
export default function TodoList() {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="header text-center">
        <h3>ToDoList</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create a Task
        </button>
      </div>
      <div className="task-container"></div>
      <CreateTask toggle={toggle} modal={modal} />
    </>
  );
}
