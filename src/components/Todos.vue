<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @del-todo="delTodo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    delTodo(id) {
      this.$emit("del-todo", id);
    }
  }
};
</script>

<style scoped>
</style>