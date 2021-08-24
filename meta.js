module.exports = {
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'VueJS + Vuetify.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    model: {
      'type': 'string',
      'required': true,
      'message': 'Name of the entity for CRUD operations',
      'default': 'Task'
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};