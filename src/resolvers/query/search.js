const axios = require('axios');
const {FOOD2FORK_URL, API_KEY} = require('../../config');

module.exports = async(root, args) => await axios
  .get(`${FOOD2FORK_URL}/search?key=${API_KEY}&q=${args.searchTerm}`)
  .then(response => response.data.recipes);
