<template>
  <section class="container">
    <header class="header">
      <h1 class="title">TOPICAL</h1>
      <p class="subtitle">Anesthetic</p>
    </header>

    <div class="sceneListContainer">
      <h2 class="sceneListTitle">Scenes</h2>
      <SceneList :book="book" :info="info" />
    </div>
  </section>
</template>

<script>
import sanityClient from '../sanityClient'
import SanityImage from '~/components/SanityImage'
import SceneList from '~/components/SceneList'
const query = `
  {
    "info": *[_id == "sceneInformation"] {
      ..., image { ..., asset->}
    }[0]
  }
`
export default {
  components: {
    SanityImage,
    SceneList
  },
  data() {
    return {
      book: this.$store.getters.getBook
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords.join(',')
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}
.header {
  padding: 0 1.5rem;
  text-align: center;
}
.sceneListTitle {
  text-align: center;
  font-weight: 600;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 0 0 3rem;
  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}
.sceneListContainer {
  max-width: var(--width-small);
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
