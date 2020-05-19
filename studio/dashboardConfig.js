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
                  buildHookId: '5ec4164a9596793ac3e6f8d9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1xy6xtvg',
                  apiId: '1d185c69-f31f-46f1-b432-4a092956af2b'
                },
                {
                  buildHookId: '5ec4164b8cb5845909871185',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bczgdg6j',
                  apiId: '4fcb933e-d068-499a-962c-4789160eef10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codeSTACKr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bczgdg6j.netlify.app', category: 'apps'}
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
