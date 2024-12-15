import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isVerified: {
    email: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Boolean,
      default: false,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model('User', userSchema, 'users');

export default User;
