export default {
  name: 'book',
  type: 'document',
  title: 'Table of Contents',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'outline',
      type: 'array',
      title: 'Synopsis',
      of: [{type: 'scene'}]
    }
  ],
  preview: {
    select: {
      outline: 'outline'
    },
    prepare ({outline}) {
      const chFocus = scene.name
      return {
        title: `The book - ${chFocus} scene${chFocus > 1 && 's'}`
      }
    }
  }
}
