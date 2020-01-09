module.exports = async ({ config, mode }) => {
  if (mode === 'PRODUCTION') {
    config.output.publicPath = '/storybook/';
  }
  return config;
};
