<template>
  <ul class="sceneList">
    <SceneItem
      v-for="(sceneItem, index) in book.outline"
      :key="sceneItem._key"
      :index="index"
      :scene-item="sceneItem"
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
      default: () => {}
    },
    book: {
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
