// controllers/courseController.js
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

// ✅ Create Course (UPDATED for file uploads)
export const createCourse = async (req, res) => {
  try {
    const courseData = req.body;

    // Files se full URL banayein (Blog wale fix ki tarah)
    if (req.files && req.files.bannerImage) {
      courseData.bannerImage = `${req.protocol}://${req.get("host")}/uploads/${
        req.files.bannerImage[0].filename
      }`;
    }
    if (req.files && req.files.curriculumPdfUrl) {
      courseData.curriculumPdfUrl = `${req.protocol}://${req.get(
        "host"
      )}/uploads/${req.files.curriculumPdfUrl[0].filename}`;
    }

    // Boolean values ko handle karein jo form se 'on' ya undefined aa sakti hain
    courseData.recommended = !!courseData.recommended;
    courseData.trending = !!courseData.trending;
    courseData.mostPurchased = !!courseData.mostPurchased;
    courseData.topRanked = !!courseData.topRanked;

    const course = new Course(courseData);
    await course.save();
    res.status(201).json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ✅ Update Course (UPDATED for file uploads)
export const updateCourse = async (req, res) => {
  try {
    const courseData = req.body;

    // Check karein agar nayi file upload hui hai
    if (req.files && req.files.bannerImage) {
      courseData.bannerImage = `${req.protocol}://${req.get("host")}/uploads/${
        req.files.bannerImage[0].filename
      }`;
    }
    if (req.files && req.files.curriculumPdfUrl) {
      courseData.curriculumPdfUrl = `${req.protocol}://${req.get(
        "host"
      )}/uploads/${req.files.curriculumPdfUrl[0].filename}`;
    }

    // Boolean values ko handle karein
    courseData.recommended = !!courseData.recommended;
    courseData.trending = !!courseData.trending;
    courseData.mostPurchased = !!courseData.mostPurchased;
    courseData.topRanked = !!courseData.topRanked;

    const course = await Course.findByIdAndUpdate(req.params.id, courseData, {
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
