import mongoose from "mongoose";

// Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String, // upload/link
});

// Instructor Schema (example, update as needed)
const instructorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  image: String,
});

// Curriculum Schema
const curriculumSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  quote: String,
  author: String,
});

// FAQ Schema
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

// Placement Stats Schema
const placementStatsSchema = new mongoose.Schema({
  percentage: Number,
  topCompanies: [String],
});

// Institute Details Schema
const instituteDetailsSchema = new mongoose.Schema({
  name: String,
  location: String,
});

// Demand Section Schema
const demandSectionSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// About Institute Schema
const aboutInstituteSchema = new mongoose.Schema({
  description: String,
});

// Certification Schema
const certificationSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Rise to Roar Schema
const riseToRoarSchema = new mongoose.Schema({
  title: String,
  points: [String],
});

// Program Execution Schema
const programExecutionSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Main Course Schema
const courseSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    category: [categorySchema],
    curriculumPdfUrl: String,
    title: String,
    shortDesc: String,
    longDesc: String,
    type: String,
    duration: String,
    schedule: String,
    enrolled: String,
    price: String,
    originalPrice: String,
    discount: String,
    gradient: String,
    bannerImage: String,
    videoPresentation: String,
    instructors: [instructorSchema],
    images: [String],
    videos: [String],
    features: [String],
    curriculum: [curriculumSchema],
    projects: [projectSchema],
    testimonials: [testimonialSchema],
    faqs: [faqSchema],
    placementStats: placementStatsSchema,
    recommended: { type: Boolean, default: false },
    badges: [String],
    instituteDetails: instituteDetailsSchema,
    demandSection: demandSectionSchema,
    aboutInstitute: aboutInstituteSchema,
    certificationSection: certificationSchema,
    addOnBenefits: [String],
    ourNetwork: [String],
    riseToRoar: riseToRoarSchema,
    programExecution: programExecutionSchema,
    toolsCovered: [String],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
