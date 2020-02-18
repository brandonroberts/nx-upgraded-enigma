module.exports = {
  name: 'tools',
  preset: '../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: './tools/tsconfig.tools.json',
    },
  },  
  resolver: ''
};
