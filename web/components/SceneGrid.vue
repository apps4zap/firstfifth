<template>
  <ul v-if="filteredScenes" class="scene.Grid">
    <li v-for="scene in filteredScenes" :key="scebe._id" class="scene">
      <nuxt-link :to="`/scenes/${scene._id}`">
        <span class="top">
          <span>
            <span class="type">{{ scene.sceneType }}</span>
            <h2 class="sceneTitle">{{ scene.title }}</h2>
          </span>
        </span>
        <p>
          {{ scene.summary }}
        </p>
      </nuxt-link>
      <PersonsList
        v-if="showPersons && scene.persons"
        :persons="scene.persons"
      />
    </li>
  </ul>
</template>

<script>
import PersonsList from '~/components/PersonsList'
export default {
  components: {
    PersonsList
  },
  props: {
    showPersons: {
      type: Boolean,
      default: false
    },
    scenes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredScenes: props => {
      return props.scenes.map(scene => {
        return {
          ...scene,
          ...scene.scene,
          persons:
            scene.persons &&
            scene.persons.filter(
              person =>
                person.person &&
                person.person.slug &&
                person.person.slug.current
            )
        }
      })
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';
.sceneGrid {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3rem;
}
h2.sceneTitle {
  font-weight: 600;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 0;
  margin-top: 0.5rem;
}
.scene {
  display: flex;
  flex-direction: column;
  @nest & p {
    margin: 0.5rem 0;
  }
}
.sceneGrid a {
  color: inherit;
  text-decoration: inherit;
}
.scene .top {
  display: flex;
  justify-content: space-between;
}
.sceneGrid a > span {
  display: block;
}
.sceneGrid a span.type {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.scene .time {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-top: 0;
  color: var(--color-gray);
}
</style>
