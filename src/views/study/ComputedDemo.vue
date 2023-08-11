<template>
  <div class="computed-demo">
    <span>{{ person }}</span>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ComputedDemo',
  setup() {
    const person = {
      firstName: 'Liu',
      lastName: 'Tianqing',
      age: 18,
      fullName: null,
    }

    person.fullName = computed(() => {
      return person.firstName + person.lastName;
    });

    return { person };
  }
}
</script>
