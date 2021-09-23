

<template>
    <div class="min-h-screen py-20 bg-gradient-to-tr from-indigo-600 to-purple-500 ">
      <h1 class="text-center text-5xl font-bold text-gray-100"> TODOLIST1</h1>
      <div class=" mt-6 bg-indigo-50 max-w-sm mx-auto p-6 rounded-lg  shadow-lg">
        <TodoInput
          @add-todo="addTodo"
        />
        <!-- 不可以 @add-todo="addTodo()" 這樣會沒帶到參數 -->
        <TodoFilter
          :filter="filter"
          @update-filter="updateFilter" class="mt-6"
        />

        <transition-group
          name="fade"
          class="mt-4 space-y-3"
          tag="ul"
          enter-active-class="transition transform"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition transform"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
        >
          <TodoItem
            v-for="todoItem in filteredTodos"
            v-bind="todoItem"
            :key="todoItem.id"
            @update-state="updateState"
            @delect-todo="delectTodo"
            @update-todo="updateTodo"
          />
          <!-- :todoItem="todoItem" props 同 v-bind:todoItem="todoItem"-->
        </transition-group>
      </div>
    </div>
</template>

<script>

import TodoInput from './components/TodoInput.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoItem from './components/TodoItem.vue'
import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export default {
  components:{
    TodoInput,
    TodoFilter,
    TodoItem
  },
  setup(){
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
    const items= ref([])

    const addTodo = newTodoText => {
      console.log(newTodoText)
      todos.value.push({
        id: Date.now(),
        content: newTodoText,
        isDone: false
      })
    }
  	const add = () => {
      todos.value.push({
        id: Date.now(),
        content: 'erewr',
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
    const updateFilter = (changefilter) => {
      filter.value = changefilter
    }

    const filter = ref('all')
    const filteredTodos = computed(()=>{
      if (filter.value === 'isDone') {
        return todos.value.filter(todo => todo.isDone)
      } else if (filter.value === 'unDone'){
        return todos.value.filter(todo => !todo.isDone)
      }
      return todos.value
    })

    return { items, todos, addTodo, updateState, delectTodo, updateTodo, add, filter, filteredTodos, updateFilter}
  }
}
</script>

<style>
.fade-enter {
  opacity:0;
}

.fade-enter-active{
  animation: fadein 1s;
}

.fade-leave {
  opacity:1;
}

.fade-leave-active {
  animation: fadein 1s reverse;
}


@keyframes fadein {
  from {opacity: 0;}
  to   {opacity: 1;}
}
</style>