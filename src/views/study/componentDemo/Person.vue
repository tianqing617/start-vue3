<template>
  <div class="setup-demo">
    <div class="info">
      姓名：<span>{{ person.name }}</span>
      年龄：<span>{{ person.age }}</span>
    </div>
    <button @click="handleClick">毕业</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'PersonDemo',
  props: ['school'],
  emits: ['graduate'],
  setup(props, context) {
    console.log(props, context);

    const person = reactive({
      name: 'jim',
      age: 18,
    });

    function handleClick() {
      console.log('我毕业了');
      context.emit('graduate', person);
    }

    return {
      person,
      handleClick,
    }
  }
}
</script>
