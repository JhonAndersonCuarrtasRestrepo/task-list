import React, { useState } from 'react';
import '../style/Tareas.css'
import useTask from '../hooks/UseTask';

function Tareas() {
    const {
      taskName,
      taskDescription,
      tasks,
      errorMessage,
      editingTaskId,
      handleTaskNameChange,
      handleTaskDescriptionChange,
      handleSubmit,
      handleEditTask,
      handleDeleteTask,
      handleToggleComplete,
    } = useTask();

  return (
  <div>
    <h1>Todo App</h1>
    <form onSubmit={handleSubmit} className='formFather'>
      <div>
        <label htmlFor="taskName">Nombre de la tarea:</label>
        <input type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div>
        <label htmlFor="taskDescription">Descripción de la tarea:</label>
        <textarea id="taskDescription" value={taskDescription} onChange={handleTaskDescriptionChange} />
      </div>
      <div>
        <button className='botonGuardar' type="submit">{editingTaskId !== null ? 'Editar tarea' : 'Guardar tarea'}</button>
      </div>
    </form>
    {tasks.map((task) => (
      <div key={task.id} className='task'>
        <h3>{task.name}</h3>
        <p className={task.completed ? 'completado' : ''}>{task.description}</p>
        <input type="checkbox" className='checkList' checked={task.completed} onChange={() => handleToggleComplete(task.id)} />
        <button className='botonGuardar' onClick={() => handleEditTask(task.id)}>Editar</button>
        <button className='botonGuardar' onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
      </div>
    ))}
  </div>
  )}

export default  Tareas;