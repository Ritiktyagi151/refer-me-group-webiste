import { Helmet } from "react-helmet-async";

const SEOManagement = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link
        rel="canonical"
        href={`${window.location.origin}${canonical}`}
      />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Refer Me Group" />
    </Helmet>
  );
};

export default SEOManagement;
