import { useLocalStorage } from '@vueuse/core'

export default function useTodos(){
  const todos = useLocalStorage('todos',[
    {
      id: 1,
      content: '學 tialwind',
      isDone: false
    },
    {
      id: 2,
      content: '學 Vue',
      isDone: false
    }
  ])
  const addTodo = newTodoText => {
    console.log(newTodoText)
    todos.value.push({
      id: Date.now(),
      content: newTodoText,
      isDone: false
    })
  }
  const updateState = (id, updateSatus) => {
    // 取得item的排序
    const todoIndex = todos.value.findIndex(todo => todo.id === id)
    // 有找到
    if(todoIndex !== -1){
      todos.value[todoIndex].isDone = updateSatus
    }
  }
  const delectTodo = (id) => {
    // 取得item的排序
    const todoIndex = todos.value.findIndex(todo => todo.id === id)
    // 有找到
    if(todoIndex !== -1){
      todos.value.splice(todoIndex, 1)
    }
  }
  const updateTodo = (id, updateContent) => {
    // 取得item的排序
    const todoIndex = todos.value.findIndex(todo => todo.id === id)
    // 有找到
    if(todoIndex !== -1){
      todos.value[todoIndex].content = updateContent
    }
  }
  return{
    todos,
    addTodo,
    updateState,
    delectTodo,
    updateTodo
  }
}