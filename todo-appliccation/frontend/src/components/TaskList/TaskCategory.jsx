import React from 'react'
import Task from './Task'

const TaskCategory = () => {
  return (
    <div className='taskCategory'>
        <h2 className='taskCategory__title'>Priority Tasks</h2>
        <Task />
        <Task />
        <Task />
    </div>
  )
}

export default TaskCategory