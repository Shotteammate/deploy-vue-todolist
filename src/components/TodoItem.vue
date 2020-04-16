<template>
  <div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounce"
      leave-active-class="animated slideOutRight"
    >
      <div v-if="show" class="todo-item" :class="{'is-complete':todo.completed}">
        <p>
          <input type="checkbox" @click="markComplete" />
          {{todo.title}}
          <button class="del" @click="delTodo">x</button>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object
    }
  },
  data() {
    return { show: true };
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    delTodo() {
      this.$emit("del-todo", this.todo.id);
      this.show = !this.show;
    }
  },
  created() {
    eventBus.$on('addItemEventBus', (data)=>{
      console.log('addItemEventBus: ', data)
    })
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>