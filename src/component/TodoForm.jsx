import React,{ useState ,useEffect}  from 'react'
import {Box,Text} from '@chakra-ui/react'
import '../assets/TodoForm.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoForm() {

  const [todos , setTodos] = useState(()=>{
    const localValue = localStorage.getItem("items")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(todos))
  },[todos])

  function addTodo (title ,time){
     setTodos((currentTodo)=>{
          return [...currentTodo , {
            id : crypto.randomUUID(),
            title ,
            time,
            completed : false
          }]
    
        })
  }
  
  function toggleTodo (id, completed){
    setTodos((currentTodo)=>{
      return currentTodo.map((todo)=>{
        if( todo.id === id){
          return{...todo,completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos((currentTodos)=>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <div className='todo-form'>  
    <Box>
    <Text fontWeight = 'bold' fontSize='2xl'mb='10' >TO-DO App</Text>
      <TodoInput add={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Box>
  
    </div>
   
      </>
  )
}

export default TodoForm