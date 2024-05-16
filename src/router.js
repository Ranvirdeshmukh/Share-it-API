import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/posts')
  .post(async (req, res) => {
    try {
      const post = await Posts.createPost(req.body);
      res.json(post);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  })
  .get(async (req, res) => {
    try {
      const posts = await Posts.getPosts();
      res.json(posts);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

router.route('/posts/:id')
  .get(async (req, res) => {
    try {
      const post = await Posts.getPost(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const updatedPost = await Posts.updatePost(req.params.id, req.body);
      res.json(updatedPost);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const message = await Posts.deletePost(req.params.id);
      res.json(message);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

export default router;
