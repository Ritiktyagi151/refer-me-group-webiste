import Course from "../models/Course.js";

// ✅ Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Create Course
export const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Update Course
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Delete Course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Add Category
export const addCategory = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    if (req.file) req.body.image = `/uploads/${req.file.filename}`;
    course.category.push(req.body);
    await course.save();

    res.status(201).json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Update Category
export const updateCategory = async (req, res) => {
  try {
    const { courseId, categoryId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    const category = course.category.id(categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    Object.assign(category, req.body);
    await course.save();

    res.json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const { courseId, categoryId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    course.category.id(categoryId).remove();
    await course.save();

    res.json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
