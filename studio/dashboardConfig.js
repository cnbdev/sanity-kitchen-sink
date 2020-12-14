export default {
  widgets: [
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
                  buildHookId: '5fd7a4bbe462c3013dfe3574',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6omk8anp',
                  apiId: '021efe85-1546-4f00-9da4-9492c10d13f2'
                },
                {
                  buildHookId: '5fd7a4bb1d998200e4641ba0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qrmh1zi1',
                  apiId: '29ee79de-7d6f-445a-955e-aa0e4902b696'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cnbdev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qrmh1zi1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
