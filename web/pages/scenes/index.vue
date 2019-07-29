  
<template>
  <section class="container">
    <h1 class="title">Scenes</h1>
    <div class="sceneGridContainer">
      <SceneGrid
        v-if="scenesWithoutBreak"
        :scenes="scenesWithoutBreak"
      />
    </div>
  </section>
</template>

<script>
import SceneGrid from '~/components/SceneGrid'
export default {
  components: { SceneGrid },
  data() {
    return {
      book: this.$store.getters.getScene
    }
  },
  computed: {
    scenesWithoutBreak: data => {
      if (data.book && data.book.chapter) {
        return data.book.chapter.filter(
          i => i.scene.sceneType !== 'break'
        )
      }
    }
  }
}
</script>

<style scoped>
@import '../../styles/custom-properties.css';
.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}
.title {
  text-align: center;
  margin-bottom: 4rem;
}
.sceneGridContainer {
  max-width: var(--width-medium);
  padding: 0 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
