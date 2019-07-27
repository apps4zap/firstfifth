export default {
  name: 'sceneItem',
  type: 'object',
  title: 'Scene item',
  fields: [
    {
      name: 'scene',
      type: 'reference',
      title: 'Scene',
      to: [
        {
          type: 'scene'
        }
      ]
    }
  ],
  preview: {
    select: {
      scene: 'scene.title',
      sceneType: 'scene.sceneType',
      duration: 'duration'
    },
    prepare ({scene, sceneType}) {
      return {
        title: scene,
        subtitle: `${sceneType} > 1}`
      }
    }
  }
}
