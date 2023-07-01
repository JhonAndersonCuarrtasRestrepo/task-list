import React, { useState } from 'react';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTaskNameChange = (event) => {
    const name = event.target.value;
    setTaskName(name);
    if (name.length < 3) {
      setErrorMessage('Debe tener mínimo 3 caracteres');
    } else {
      setErrorMessage('');
    }
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.length < 3) {
      setErrorMessage('El nombre de la tarea debe tener al menos 3 caracteres');
      return;
    }

    if (editingTaskId !== null) {
      // Editar tarea existente
      const updatedTasks = tasks.map((task) => {
        if (task.id === editingTaskId) {
          return { ...task, name: taskName, description: taskDescription };
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditingTaskId(null);
    } else {
      // Agregar nueva tarea
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
      };
      setTasks([...tasks, newTask]);
    }

    // Restablecer los valores de los inputs a su estado inicial
    setTaskName('');
    setTaskDescription('');
    setErrorMessage('');
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
      setEditingTaskId(taskId);
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Formulario de tareas</h1>
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
          <p>{task.description}</p>
          <button className='botonGuardar' onClick={() => handleEditTask(task.id)}>Editar</button>
          <button className='botonGuardar' onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskForm;
