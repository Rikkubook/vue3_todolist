

<template>
    <div class="min-h-screen   py-20 bg-gradient-to-tr from-indigo-600 to-purple-500">
      <h1 class="text-center text-5xl font-bold text-gray-100"> TODOLIST1</h1>
      <div class=" mt-6 bg-indigo-50 max-w-sm mx-auto p-6 rounded-lg  shadow-lg">
        <TodoInput />
        <TodoFilter class="mt-6"/>
        <ul  class="mt-4">
          <TodoItem />
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
      return {todos}
  }
}
</script>
