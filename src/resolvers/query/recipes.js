const Recipe = require('../../models/recipe');
const User = require('../../models/user');

module.exports = async(root, args, context) => {
  const decodedToken = context.isAuthorized();
  const userId = decodedToken.user.id;
  const isUser = await User.findById(decodedToken.user.id);
  if(isUser){
    return await Recipe.find({userId})
  }else{
    throw('Unauthorized');
  }
}