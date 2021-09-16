<template>
  <form action="" class="relative" @submit.prevent="handleAddTodo()">
    <input type="text" name="" id="" v-model="newTodo" class="w-full rounded-full border-none focus:ring-0 shadow-lg px-5">
    <button class="absolute right-0 inset-y-0 w-10 h-10  bg-gradient-to-t  from-indigo-600 to-purple-500  rounded-full text-white"> ＋ </button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['add-todo'],
  setup (props, {emit}) {
    const newTodo =  ref('')
    const handleAddTodo = () => { //enter會自動觸發form submit
      emit('add-todo', newTodo.value)
    }
    return {newTodo, handleAddTodo}
  }
}
</script>