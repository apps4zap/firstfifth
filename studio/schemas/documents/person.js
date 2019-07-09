export default {
  type: 'document',
  name: 'person',
  title: 'Person',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
{
      name: 'crew',
      title: 'Crew',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'abilities',
      title: 'Magic',
      type: 'magic'
    }
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
