import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
// 1. SEO Component ko import karein
import SEOManagement from "../../components/seo/SEOManagement";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://refermegroup.com/api/blogs");
        const data = await res.json();
        console.log("Fetched blogs:", data);
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      {/* 2. SEO Management Tags Add Karein */}
      <SEOManagement
        title=" Blog | Refer Me Group Insights"
        description="Read the latest professional insights, career growth strategies, and emerging industry trends from Refer Me Group experts to stay ahead in your journey."
        keywords="career blog, professional development tips, job search strategies, industry trends 2025, Refer Me Group insights"
        canonical="/blogs"
      />

      <div className="bg-gradient-to-br from-violet-100 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              Refer Me Group Blog
            </h1>
            <p className="text-lg text-gray-600">
              Expert insights, career tips, and emerging trends to guide your
              professional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <article // 3. SEO ke liye 'article' tag use karna behtar hai
                  key={blog._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                    loading="lazy" // 4. Performance ke liye lazy loading add karein
                  />
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 gap-3 mb-2">
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar /> {blog.createdAt?.slice(0, 10)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock /> 5 min read
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="hover:text-indigo-600"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-gray-500">
                        <FiUser /> {blog.author}
                      </span>
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="text-indigo-600 font-medium hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {blog.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-10 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Under Maintenance
                </h3>
                <p className="text-sm text-gray-500">
                  This section is currently under maintenance. Please check back
                  later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
