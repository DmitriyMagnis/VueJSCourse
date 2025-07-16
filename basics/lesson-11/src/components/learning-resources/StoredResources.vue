<template>
  <ul>
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :link="resource.link"
      :description="resource.description"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResources.vue';

export default {
  components: {
    LearningResource,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
