<template>
  <!--父子组件用法-->
  <div class="compoent-demo">
    <span>学生信息：</span>
    <person-demo @graduate="handleGraduate" school="grade school">
      <template v-slot:schoolEvaluate>
        <span>学校评价</span>
      </template>
      <span>个人评价</span>
    </person-demo>
  </div>
</template>

<script>
import PersonDemo from './Person.vue';

export default {
  name: 'ComponentDemo',
  components: { PersonDemo },
  setup() {
    // 此方法执行，早于beforeCreate。若使用this，则是undefined
    function handleGraduate(info) {
      console.log('毕业学生信息', info);
    }

    return {
      handleGraduate,
    }
  },
}
</script>
