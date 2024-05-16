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
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}

export async function deletePost(id) {
  try {
    await Post.findByIdAndDelete(id);
    return { message: 'Post deleted successfully' };
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
}

export async function updatePost(id, postFields) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, postFields, { new: true });
    return updatedPost;
  } catch (error) {
    throw new Error(`update post error: ${error}`);
  }
}
