const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  source_url: String,
  image_url: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true}
});

recipeSchema.set('timestamps', true);

recipeSchema.set('toObject', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);