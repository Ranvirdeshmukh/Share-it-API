import mongoose from 'mongoose';
import Post from '../models/post_model';

export async function createPost(postFields) {
  const post = new Post(postFields);
  try {
    const savedPost = await post.save();
    return savedPost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}

export async function getPosts() {
  try {
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

export async function getPost(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid post ID');
    }
    const post = await Post.findById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}

export async function deletePost(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid post ID');
    }
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return { message: 'Post deleted successfully' };
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
}

export async function updatePost(id, postFields) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid post ID');
    }
    const updatedPost = await Post.findByIdAndUpdate(id, postFields, { new: true });
    if (!updatedPost) {
      throw new Error('Post not found');
    }
    return updatedPost;
  } catch (error) {
    throw new Error(`update post error: ${error}`);
  }
}
