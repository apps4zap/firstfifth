export default {
  name: 'bookInformation',
  type: 'document',
  title: 'Book Information',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Book name'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your book for search engines and social media.'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Book image'
    },
    {
      name: 'Era',
      type: 'era',
      title: 'Era',
      description: 'When does the action take place?'
    },
    {
      name: 'Locale',
      type: 'locale',
      title: 'Locale',
      description: 'Where will the event take place?'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your story.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'contributors',
      type: 'array',
      description: 'Publish one or more people.',
      title: 'Contributors',
      validation: Rule => Rule.unique().error('You can only have one of a person'),
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}]
        }
      ]
    }
  ]
}
