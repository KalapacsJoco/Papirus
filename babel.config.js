module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      ['@babel/plugin-transform-private-methods', { loose: true }], // "loose" mód hozzáadása
      ['@babel/plugin-transform-class-properties', { loose: true }], // Hozzáadott plugin
      ['@babel/plugin-transform-private-property-in-object', { loose: true }], // Hozzáadott plugin
    ],
  };