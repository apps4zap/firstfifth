export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'firstfifth-studio',
                  apiId: '53819d65-710f-43a0-ab58-d2ae14b28214'
                },
                {
                  buildHookId: '5d23b4bd332e50e43113ca82',
                  title: 'Events Website',
                  name: 'firstfifth',
                  apiId: '4424cc6d-bbb1-40bb-bb12-42e627af8efc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apps4zap/firstfifth',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://firstfifth.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
