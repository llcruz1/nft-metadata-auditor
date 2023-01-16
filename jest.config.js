module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  verbose:true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // testMatch: [
  //   "**/__test__/*.test.js"
  // ]
};
