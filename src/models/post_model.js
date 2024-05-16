import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true },
  tags: { type: String },
  content: { type: String, required: true },
  coverUrl: { type: String },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
