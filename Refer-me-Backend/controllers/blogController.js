import Blog from "../models/Blog.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, image, author, category, tags, slug } = req.body;

    const blog = new Blog({ title, excerpt, content, image, author, category, tags, slug });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Blog creation failed", details: err.message });
  }
};

// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// GET SINGLE BLOG
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to get blog" });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: "Failed to update blog" });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};
