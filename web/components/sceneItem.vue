<template>
  <li class="session">
    <div class="meta">
    <div class="content">
      <h3>
        <nuxt-link :to="{ path: `/scenes/${sceneItem.scene._id}` }">{{
          sceneItem.scene.title || 'Undefined title'
        }}</nuxt-link>
      </h3>
      <p>
        {{ sceneItem.scene.summary }}
      </p>
      <PersonsList :persons="sceneItem.scene.persons" />
    </div>
  </li>
</template>
<script>
import PersonsList from '~/components/PersonsList'
export default {
  components: {
    PersonsList
  },
  props: {
    sceneItem: {
      type: Object,
      default() {}
      },
      scene: {
        summary: {
          type: String,
          default: 'Missing summary'
        },
        persons: {
          type: Array,
          default: () => []
        }
      }
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';
li.session {
  display: block;
  margin-bottom: 4rem;
}
@media (--media-min-medium) {
  li.scene {
    display: flex;
    align-items: baseline;
  }
}
li.scene .meta {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-bottom: 0.5rem;
  color: var(--color-gray);
}
li.scene .meta .scenetype {
  text-align: right;
}
@media screen and (min-width: 768px) {
  li.scene .meta {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    min-width: 10rem;
    width: 10rem;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-right: 1rem;
    padding-right: 1rem;
    font-size: 1em;
    text-align: right;
  }
  li.scene .content {
    flex-grow: 1;
  }
  li.scene .meta .time {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
    margin-bottom: 0.5rem;
  }
}
li.scene h3 {
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  font-weight: 600;
  margin: 0 0 0.5rem;
}
li.scene h3 a {
  color: inherit;
  text-decoration: inherit;
}
li.scene h3 + p {
  margin: 0;
}
</style>
