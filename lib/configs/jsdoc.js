const rules = {
  'jsdoc/require-jsdoc': [
    'warn',
    {
      contexts: [
        'PropertyDefinition',
        'ClassDeclaration',
        'ClassExpression',
        'FunctionDeclaration',
        'MethodDefinition'
      ],
      checkConstructors: false,
    }
  ],

  'jsdoc/require-description': [
    'warn',
    {
      checkConstructors: false,
    }
  ],

  'jsdoc/require-param': [
    'warn',
    {
      checkSetters: false,
      checkConstructors: false,
      checkDestructured: false
    }
  ],

  'jsdoc/check-param-names': [
    'warn',
    {
      checkDestructured: false
    }
  ],

  'jsdoc/check-indentation': 'warn',
  'jsdoc/check-alignment': 'warn',
  'jsdoc/check-line-alignment': 'warn',
  'jsdoc/check-values': 'error',
  'jsdoc/empty-tags': 'error',
  'jsdoc/no-undefined-types': 'error',
  'jsdoc/require-asterisk-prefix': 'error',
  'jsdoc/require-param-name': 'error',
  'jsdoc/require-property': 'error',
  'jsdoc/require-property-name': 'warn',
  'jsdoc/require-property-type': 'warn',
  'jsdoc/require-property-description': 'warn',
  'jsdoc/require-throws': 'warn',
};

export default rules;
