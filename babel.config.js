export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        },
        modules: 'auto'  // This will convert ES modules to CommonJS when needed
      }
    ]
  ]
};