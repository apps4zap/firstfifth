export default {
  name: 'chapterInformation',
  type: 'document',
  title: 'Chapter Information',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Chapter name'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Synopsis'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Chapter Image'
    },
    {
      name: 'location',
      type: 'location',
      title: 'Location',
      description: 'Where does the action take place?'
    },
    {
      name: 'chapterlink',
      type: 'url',
      title: 'Chapter link'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes the chapter.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'cast',
      type: 'array',
      description: 'Publish one or more persons and set a reference to them here.',
      title: 'Cast',
      validation: Rule => Rule.unique().error('You can only have one of a person'),
      of: [
        {
          type: 'reference',
          to: [{type: 'person'}]
        }
      ]
    }
  ]
}
