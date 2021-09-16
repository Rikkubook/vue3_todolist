

<template>
    <div class="min-h-screen py-20 bg-gradient-to-tr from-indigo-600 to-purple-500 ">
      <h1 class="text-center text-5xl font-bold text-gray-100"> TODOLIST1</h1>
      <div class=" mt-6 bg-indigo-50 max-w-sm mx-auto p-6 rounded-lg  shadow-lg">
        <TodoInput @add-todo="addTodo"/>
        <!-- 不可以 @add-todo="addTodo()" 這樣會沒帶到參數 -->
        <TodoFilter class="mt-6"/>
        <ul  class="mt-4">
          <TodoItem
            v-for="todoItem in todos"
            v-bind="todoItem"
            @update-state="upDateState"
            @delect-todo="delectTodo"
          />
          <!-- :todoItem="todoItem" props 同 v-bind:todoItem="todoItem"-->
        </ul>
      </div>
    </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TodoInput from './components/TodoInput.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoItem from './components/TodoItem.vue'
import { ref } from 'vue'

export default {
  components:{
    TodoInput,
    TodoFilter,
    TodoItem
  },
  setup(){
    const todos = ref([
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

    const upDateState = (id, updateSatus) => {
      // 取得item的排序
      const todoIndex = todos.value.findIndex(todo => todo.id === id)
      // 有找到
      if(todoIndex !== -1){
        todos.value[todoIndex].isDone = updateSatus
      }
    }

    const delectTodo = () => {

    }

    return {todos, addTodo, upDateState}
  }
}
</script>
