import { useState } from 'react';

function useTask() {
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
        completed: false, // Nuevo campo para el estado de completado
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

  const handleToggleComplete = (taskId) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
};

  // Devolver los valores y funciones necesarios como un objeto
  return {
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
  };
}

export default useTask;
