module.exports = function (plop) {
  // page generator
  plop.setGenerator('page', {
    description: 'Creates application page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Page name: '
    }],
    actions: [{
      type: 'addMany',
      destination: 'src/pages/{{name}}',
      templateFiles: 'plop-templates/pages/*.hbs',
      base: 'plop-templates/pages',
      stripExtensions:['hbs',]
    }]
  });
  plop.setGenerator('component', {
    description: 'Creates application component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name: '
    }],
    actions: [{
      type: 'addMany',
      destination: 'src/components/{{name}}',
      templateFiles: 'plop-templates/components/*.hbs',
      base: 'plop-templates/components',
      stripExtensions:['hbs',]
    }]
  });
};
