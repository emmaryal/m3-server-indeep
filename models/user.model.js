const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String,  unique: true, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true}, 
  profilePic: {type: String},
  favouriteRecords: [{type: Schema.Types.ObjectId, ref: "Record" }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;

