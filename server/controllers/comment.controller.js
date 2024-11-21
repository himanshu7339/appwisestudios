import Comment from "../model/comment.model.js";

// create comment
export const createComment = async (req, res) => {
  try {
    const { name, email, content } = req.body;
    const comment = new Comment({ name, email, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get comments
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
