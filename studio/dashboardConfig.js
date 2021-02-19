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
                  buildHookId: '603022ea50dc581bdc751255',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h8sjqs4j',
                  apiId: '5510d5f5-29f0-4acf-bf5a-6014da9c10ab'
                },
                {
                  buildHookId: '603022ea37d81527772eff2e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9tm6y8gw',
                  apiId: 'ab8dc401-047f-4cbe-97ed-9e425668d60e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samsherwood/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9tm6y8gw.netlify.app', category: 'apps'}
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
