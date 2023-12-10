const { environment } = require('@rails/webpacker')

environment.loaders.prepend('react', require.resolve('webpacker-react'));

module.exports = environment
