<template>
  <div class="setup-demo">
    姓名：<span>{{ name }}</span>
    年龄：<span>{{ age }}</span>
  </div>
</template>

<script>
export default {
  name: 'SetupDemo',
  setup() {
    let name = '张三';
    let age = 18;

    return {
      name,
      age,
    }
  }
}
</script>
