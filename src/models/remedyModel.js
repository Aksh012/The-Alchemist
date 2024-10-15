import mongoose from 'mongoose';

const remedySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  disease: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Remedy = mongoose.model('Remedy', remedySchema);

export default Remedy;