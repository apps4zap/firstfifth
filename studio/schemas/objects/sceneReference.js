export default {
  name: 'sceneReference',
  type: 'object',
  title: 'Scene reference',
  fields: [
    {
      type: 'reference',
      name: 'scene',
      to: [
        {
          type: 'sceneInformation'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'scene.name',
      media: 'scene.image.asset'
    }
  }
}
