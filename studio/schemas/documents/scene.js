import icon from 'react-icons/lib/md/av-timer'

export default {
  name: 'scene',
  type: 'document',
  title: 'Scene',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'persons',
      type: 'array',
      title: 'Cast',
      description: 'Who is in this scene?',
      of: [
        {
          name: 'person',
          type: 'personReference',
          title: 'Person'
        }
      ]
    },
    {
      name: 'sessionType',
      type: 'string',
      title: 'Scene type',
      options: {
        list: [
          {value: 'backstory', title: 'Backstory'},
          {value: 'action', title: 'Action'},
          {value: 'romance', title: 'Romance'},
          {value: 'battle', title: 'Battle'}
        ]
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      sessionType: 'sessionType',
      person: 'person.name',
      media: 'image'
    },
    prepare ({title, media, sessionType, person}) {
      return {
        title,
        media,
        subtitle: `${sessionType} ${person ? `- ${person}` : ''}`
      }
    }
  }
}
