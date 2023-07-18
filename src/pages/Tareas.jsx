import React, { useState } from 'react';
import '../style/Tareas.css'
import useTask from '../hooks/UseTask';
import { Text, Button, Textarea, Input, VStack, Center } from "@chakra-ui/react";

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
    <Text backgroundColor="transparent" fontSize="55" color="rgb(220, 220, 220)" textAlign="center">Todo App</Text>
    <form onSubmit={handleSubmit} className='formFather'>
      <VStack>
        <label htmlFor="taskName">Nombre de la tarea:</label>
        <Input type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} />
        {errorMessage && <p>{errorMessage}</p>}
      </VStack>
      <VStack>
        <label htmlFor="taskDescription">Descripción de la tarea:</label>
        <Textarea id="taskDescription" value={taskDescription} onChange={handleTaskDescriptionChange} />
      </VStack>
      <VStack>
        <button className='botonGuardar' type="submit">{editingTaskId !== null ? 'Editar tarea' : 'Guardar tarea'}</button>
      </VStack>
    </form>
    {tasks.map((task) => (
      <div key={task.id} className='task'>
        <Text backgroundColor="transparent" textAlign="center" fontSize={25} mt={5}>{task.name}</Text>
        <Text textAlign="center" className={task.completed ? 'completado' : ''}>{task.description}</Text>
        <Center>
        <Input w={20} type="checkbox" className='checkList' checked={task.completed} onChange={() => handleToggleComplete(task.id)} />
        <Button className='botonGuardar' onClick={() => handleEditTask(task.id)}>Editar</Button>
        <Button className='botonGuardar' onClick={() => handleDeleteTask(task.id)}>Eliminar</Button>
        </Center>
      </div>
    ))}
  </div>
  )}

export default  Tareas;