const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    required: "Password is required."
  },

  userImage: {
    data: Buffer,
    contentType: String
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "Email is Required"
  },

  date: {
    type: Date,
    default: Date.now
  },

  lastLoginDate: {
    type: Date,
    default: Date.now
},

  snipsArr: {
    type: Array,
    default: []
  }
});

userSchema.statics.login = function login(id, callback) {
  return this.findByIdAndUpdate(id,{'$set' : { 'lastLoginDate' : Date.now()} }, { new : true }, callback);
};

const User = mongoose.model("user", userSchema);

module.exports = User;