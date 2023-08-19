<template>
  <div class="hook-demo">
    <h2>当前点击时鼠标坐标为：</h2>
    <span>x: {{ point.x }}</span>
    <span class="split">, </span>
    <span>y: {{ point.y }}</span>
  </div>
</template>

<script>
import usePoint from './usePoint';
export default {
  name: 'HookDemo',
  setup() {
    const point = usePoint();

    return { point };
  }
}
</script>
