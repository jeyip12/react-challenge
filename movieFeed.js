const data = require('./movies.json')

const movieFeed = {
  fetch: () => new Promise((resolve) => resolve(data))
}

module.exports = movieFeed
