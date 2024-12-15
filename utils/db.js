import mongoose from 'mongoose';

async function connectMongo() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log('Unable to connect to MongoDB.');
    console.log(error);
  }
}

connectMongo();
