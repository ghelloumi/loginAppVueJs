const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.model('User', new Schema({
  username: {type: String, required: true, max: 100},
  firstname: {type: String, required: true, max: 100},
  lastname: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100},
  age: {type: Date, required: true},
  phone: {type: Number, required: true, max: 100},
  gender: {type: String, required: true},
}));

// Export the models
module.exports = {
  userSchema
};
