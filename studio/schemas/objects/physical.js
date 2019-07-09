// The schema for Character physical object type
export default {
  title: 'Physical',
  name: 'physical',
  type: 'object',
  fields: [
    {
      title: 'Physicality',
      name: 'physicality',
      type: 'number'
    },
    {
      title: 'Age',
      name: 'age',
      type: 'number'
    },
    {
      title: 'Gender',
      name: 'gender',
      type: 'array',
      of: [{type: "string"}]
    },
   {
     title: 'Government tag',
  name: 'gtag',
  type: 'string'
    },
    {
      title: 'Origin',
      name: 'origin',
      type: 'string'
    },
    {
      title: 'Height',
      name: 'height',
      type: 'number'
    },
{
      title: 'Length',
      name: 'length',
      type: 'number'
    },
  ]
}
