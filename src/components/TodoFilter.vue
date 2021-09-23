<template>
  <nav class="space-x-2">
    <button
      class="font-semibold"
      :class="filter==='all'?'text-indigo-600':'text-indigo-300'"
      @click="updateFilter('all')"
    >
      全部
    </button>
    <button
      class="font-semibold"
      :class="filter==='isDone'?'text-indigo-600':'text-indigo-300'"
      @click="updateFilter('isDone')"
    >
      未完成
    </button>
    <button
      class="font-semibold"
      :class="filter==='unDone'?'text-indigo-600':'text-indigo-300'"
      @click="updateFilter('unDone')"
    >
      已完成
    </button>
  </nav>
</template>

<script>

export default {
  emits: ['update-filter'],
  props:{
    filter: {
      type: String,
      default: 'all'
    }
  },
  setup(props, {emit}) {
    const updateFilter = (newFilter) => {
      console.log(newFilter)
      emit('update-filter', newFilter)
    }
    return { updateFilter }
  }
}
</script>
