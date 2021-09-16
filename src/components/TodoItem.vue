<template >
    <li class="bg-white rounded-md flex justify-between mb-3">
      <div class="flex items-center px-5 py-2">
        <input type="checkbox" class="mr-2 text-indigo-600 rounded-full w-5 h-5" :checked="isDone" @change="updateState">
         <!-- 不可以 @change="UpdateState()" 這樣會沒帶到參數 -->
        <div
          class="text-indigo-700"
          :class="isDone? 'line-through':''"
        >
          {{ content }}
        </div>
        <!-- <input type="text" class="p-1 border-none focus:ring-indigo-500 rounded-sm text-indigo-600" v-model="content"> -->
      </div>
      <button class="px-5 py-3 text-indigo-300 hover:text-pink-700" @click="delectTodo">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['update-state', 'delect-todo'],
  props:{
    id: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ''
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  setup (props, {emit}) {
    const updateState = (event) => { //enter會自動觸發form submit
      // console.log(event.target.checked)
      emit('update-state', props.id, event.target.checked)
    }
    const delectTodo = () =>{
      emit('delect-todo', props.id)
    }
    return {updateState, delectTodo}
  }
}
</script>