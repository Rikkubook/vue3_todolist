

<template>
    <div class="min-h-screen py-20 bg-gradient-to-tr from-indigo-600 to-purple-500 ">
      <h1 class="text-center text-5xl font-bold text-gray-100"> TODOLIST1</h1>
      <div class=" mt-6 bg-indigo-50 max-w-sm mx-auto p-6 rounded-lg  shadow-lg">
        <TodoInput @add-todo="addTodo"/>
        <!-- 不可以 @add-todo="addTodo()" 這樣會沒帶到參數 -->
        <TodoFilter class="mt-6"/>

        <transition-group name="fade" class="mt-4 space-y-3" tag="ul" mode="out-in">
          <TodoItem
            v-for="todoItem in todos"
            v-bind="todoItem"
            @update-state="upDateState"
            @delect-todo="delectTodo"
            @update-todo="updateTodo"
          />
          
          <!-- :todoItem="todoItem" props 同 v-bind:todoItem="todoItem"-->
        </transition-group>

        <div>
          <button @click="add">Add new Item</button>
        </div>
        <transition-group name="fade" mode="out-in"  tag="ul">
          <li v-for="todoItem in todos" :key="todoItem" class="bg-white rounded-md flex justify-between">
            <div class="flex items-center px-5 py-2">
              <input type="checkbox" class="mr-2 text-indigo-600 rounded-full w-5 h-5" :checked="isDone" @change="updateState">
              <!-- 不可以 @change="UpdateState()" 這樣會沒帶到參數 -->
              <div
                v-if="!isEditing"
                class="p-1 text-indigo-700"
                :class="isDone? 'line-through':''"
                @dblclick="editTodo"
              >
                {{ content }}
              </div>
              <input
                v-else
                type="text"
                class="p-1 border-none focus:ring-indigo-500 rounded-sm text-indigo-600"
                v-model="contentChange"
                @keyup.enter="updateTodo"
              >
            </div>
            <button class="px-5 py-3 text-indigo-300 hover:text-pink-700" @click="delectTodo">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </li>
        </transition-group>
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

    const upDateState = (id, updateSatus) => {
      // 取得item的排序
      const todoIndex = todos.value.findIndex(todo => todo.id === id)
      // 有找到
      if(todoIndex !== -1){
        todos.value[todoIndex].isDone = updateSatus
      }
    }

    const delectTodo = id => {
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

    return { items, todos, addTodo, upDateState, delectTodo, updateTodo, add}
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