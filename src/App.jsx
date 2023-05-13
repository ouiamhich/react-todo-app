import React from 'react'
import {Box,ChakraProvider } from '@chakra-ui/react'
import TodoForm from './component/TodoForm'

function App() {
  
  return (
   <ChakraProvider >
    <Box >
     <div className='todo-form'>
        <Box width='fit-content' borderWidth={1} borderRadius={4} p={10} textAlign='center' boxShadow='md'>
          <TodoForm/>
        </Box>
      </div>
      </Box>
      </ChakraProvider>
      
      
   
  )
}

export default App