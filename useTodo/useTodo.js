import { useEffect, useReducer } from "react"
import {todoReducer} from './todoReducer'


const init = () => {
  return JSON.parse( localStorage.getItem('todos') || [])
}

export const useTodo = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  const todosCount = todos => todos.length;

  const pendingTodosCount = todos => todos.filter(todo => !todo.done).length;
  
  const handleNewTodo = ( newTodo ) => {
    const action = {
      type: 'add',
      payload: newTodo
    }
    
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'remove',
      payload: id
    }
    
    dispatch(action)
  }
  const onToggleTodo = (id) => {
    const action = {
      type: 'complete',
      payload: id
    }
    
    dispatch(action)
  }
    
  
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todosCount: todosCount(todos), 
    pendingTodosCount: pendingTodosCount(todos)
  }
}
