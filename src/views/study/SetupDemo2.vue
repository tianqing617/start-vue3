<script setup>
// 里面的代码会被编译成组件 setup() 函数的内容。
// 这意味着与普通的 <script> 只在组件被首次引入的时候执行一次不同，<script setup> 中的代码会在每次组件实例被创建的时候执行。
const name = '张三';
const age = 18;
</script>

<template>
  <div class="setup-demo">
    <span>name：</span><span>{{ name }}</span>
    <span> | </span>
    <span>age：</span><span>{{ age }}</span>
  </div>
</template>

<style scoped>

</style>
