const Recipe = require('../../models/recipe');

module.exports = async(roots, arg, context) => {
  const decodedToken = context.isAuthorized();
  const userId = decodedToken.user.id;
  const {title, source_url, image_url, publisher, publisher_url} = args.recipe;
  return await Recipe.create({title, source_url, image_url, publisher, publisher_url, userId});
}