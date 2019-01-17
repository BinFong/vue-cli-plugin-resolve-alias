module.exports = [
  {
    type: 'list',
    name: 'defaultAlias',
    message: 'Do you want to create default template for "src or components" ?',
    choices: [
      {
        name: 'Yes',
        value: true
      },
      {
        name: 'No',
        value: false
      }
    ]
  }
];
