import { computed, ref } from 'vue'

export default function filerTodos(todos){
  const filter = ref('all')
  const filteredTodos = computed(()=>{
    if (filter.value === 'isDone') {
      return todos.value.filter(todo => todo.isDone)
    } else if (filter.value === 'unDone'){
      return todos.value.filter(todo => !todo.isDone)
    }
    return todos.value
  })
  const updateFilter = (changefilter) => {
    filter.value = changefilter
  }
  return{
    filter,
    filteredTodos,
    updateFilter
  }
}