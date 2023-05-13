import React from 'react'
import { Box,Checkbox } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'

function TodoItem({id,completed,title,time, toggleTodo, deleteTodo}) {
  return (
    <>
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Checkbox  colorScheme='red' isChecked={completed} onChange={e=>toggleTodo(id , e.target.checked)} >
        <span className={completed ? 'completed' : ''}>{title} at {time}</span>
        </Checkbox>
        <CloseIcon color='red' cursor='pointer' onClick={()=>{deleteTodo(id)}} />
    </Box>
    </>   
    
  )
}

export default TodoItem