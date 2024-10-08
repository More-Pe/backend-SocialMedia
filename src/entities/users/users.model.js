import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  first_name: {
    type: String,
    required: false,
    unique: false,
  },
  last_name: {
    type: String,
    required: false,
    unique: false,
  },
  user_name: {
    type: String,
    required: false,
    unique: false,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  role: {
    type: String,
    enum: ['user', 'admin', 'super_admin'],
    default: 'user',
  },
  is_active: {
    type: Boolean,
    default: true,
  },

  profilePicture: String,
  coverPicture: String,
  about: String,

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],

}, {
  timestamps: true,
  versionKey: false,
});

const User = mongoose.model('User', userSchema);

export default User;
