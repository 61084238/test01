<template>
<div id="todo-list-example">
  <input
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo"
  >
  <ul>
     <todo-item :key="todo.id"
	  v-for="(todo, index) in todos"
	  v-bind:title="todo"
	  v-on:remove="todos.splice(index, 1)"
     ></todo-item>
  </ul>
</div>
</template>

<script>
import Vue from 'vue'

Vue.component('todoItem', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

export default {
  name: 'pageB',
  data:function(){
    return {
	newTodoText: '',
	todos: [
	'aaaaaaaaaaaaaaaaaaaaaaaaaa',
	'bbbbbbbbbbbbbbb',
	'ccccccccccccccccccc'
	]
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>


</style>
