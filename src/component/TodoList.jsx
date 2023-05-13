import React, { useState } from 'react'
import {Box,Stack} from '@chakra-ui/react'
import TodoItem from './TodoItem'

function TodoList({todos , toggleTodo ,deleteTodo}) {
    
  return (
    <Box mt='8'>
    <Stack spacing={5} direction='column'>
        <Box display='flex'  gap={8} flexDirection='column'>  
        {todos.map((todo)=>{
          return(
           <TodoItem id={todo.id} completed={todo.completed} title={todo.title} time={todo.time} key={todo.id} toggleTodo={toggleTodo}  deleteTodo={deleteTodo} />
          )
          
        })}   
        </Box>
    </Stack>

    </Box>
  )
}

export default TodoList