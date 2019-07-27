<template>
  <ul class="sceneList">
    <SessionItem
      v-for="(scheduleItem, index) in program.schedule"
      :key="sceneItem._key"
      :index="index"
      :scenee-item="scheduleItem"
    />
  </ul>
</template>
<script>
import SceneItem from '~/components/SceneItem'
export default {
  components: {
    SceneItem
  },
  props: {
    info: {
      type: Object,
      default: () => {},
    },
    program: {
      type: Object,
      default: () => {},
      scene: {
        type: Array,
        default: () => []
      }
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';
.sceneList {
  margin: 0;
  padding: 0;
}
</style>
