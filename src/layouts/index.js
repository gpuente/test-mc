export default (config, template = 'default') => {
  const layout = require(`./index.${template}.js`).layout; // eslint-disable-line
  return layout(config);
};
