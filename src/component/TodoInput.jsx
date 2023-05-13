import React , {useState} from 'react'
import {FormControl,FormLabel,Input,Box,Button} from '@chakra-ui/react'

function TodoInput({add}) {

    const [newItem,setNewItem] = useState('')
    const [itemTime,setItemTime] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        add(newItem,itemTime)
        setNewItem("")
        setItemTime("")
      }

  return (
    <Box>
        <form onSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel>New Item</FormLabel>
            <Input width="400px" type='text' value={newItem} onChange={(e)=>{setNewItem(e.target.value)}} />
            <Input ml={4} width="110px" type='time' value={itemTime} onChange={(e)=>{setItemTime(e.target.value)}} />
            <Button type='submit' mt='-2' ml='3' colorScheme='blue'>Add</Button>
        </FormControl>
    </form>
  </Box>
  )
}

export default TodoInput