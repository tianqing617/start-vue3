<script>
// 介绍：setup标准使用方法
// import { h } from 'vue';

export default {
  name: 'SetupDemo',
  setup() {
    let name = '张三';
    let age = 18;

    // 方式一：通过template渲染
    return {
      name,
      age,
    }

    // 方式二：通过render渲染
    // return () => h('span', '姓名：' + name);
  }
}
</script>

<template>
  <div class="setup-demo">
    姓名：<span>{{ name }}</span>
    年龄：<span>{{ age }}</span>
  </div>
</template>
