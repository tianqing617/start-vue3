<script>
import { watch, reactive } from 'vue';

export default {
  name: 'WatchDemo',
  setup() {
    const person = reactive({ name: 'jim', age: 18 });

    watch(person, (value, oldValue) => {
      console.log(value, oldValue);
    });

    function handleAge() {
      person.age++;
    }

    return {
      handleAge,
    }
  }
}
</script>

<template>
  <div class="watch-demo">
    <button @click="handleAge">年龄自增</button>
  </div>
</template>
