// src/components/seo/SEOManagement.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SEOManagement = ({
  title,
  description,
  keywords,
  image,
  canonical,
  noIndex,
  noFollow,
}) => {
  const metaTitle = title || "Default Meta Title";
  const metaDescription = description || "Default description of your site";
  const metaKeywords = keywords || "default, keywords, website";
  const metaImage = image || "/default-image.jpg";

  // SSR safe check (agar kabhi future me Next.js / server render use karo)
  const metaCanonical =
    canonical ||
    (typeof window !== "undefined" ? window.location.href : undefined);

  // Build robots rule
  const robotsContent = `${noIndex ? "noindex" : "index"}, ${
    noFollow ? "nofollow" : "follow"
  }`;

  return (
    <Helmet>
      {/* Title */}
      <title>{metaTitle}</title>

      {/* Meta Tags */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={robotsContent} />

      {/* Canonical URL */}
      {metaCanonical && <link rel="canonical" href={metaCanonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      {metaCanonical && <meta property="og:url" content={metaCanonical} />}
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEOManagement;
