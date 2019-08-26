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
