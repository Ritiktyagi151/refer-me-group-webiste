import mongoose from "mongoose";

const { Schema, model } = mongoose;

const navbarSchema = new Schema(
  {
    logo: {
      image: String,
      alt: String,
      height: String,
    },
    contactInfo: {
      phone: String,
      email: String,
    },
    socialLinks: [
      {
        platform: String,
        url: String,
        icon: String,
      },
    ],
    menuItems: {
      main: [
        {
          label: String,
          path: String,
          type: { type: String, default: "link" },
          items: [
            {
              label: String,
              path: String,
            },
          ],
        },
      ],
      courses: [
        {
          label: String,
          path: String,
          icon: String,
          description: String,
          color: String,
        },
      ],
    },
  },
  { _id: false }
);

const footerSchema = new Schema(
  {
    logo: {
      src: String,
      alt: String,
      size: String,
    },
    description: String,
    quickLinks: [
      {
        text: String,
        path: String,
      },
    ],
    courses: [
      {
        text: String,
        path: String,
      },
    ],
    contactInfo: {
      address: String,
      email: String,
      phone: String,
    },
    socialLinks: [
      {
        icon: String,
        link: String,
      },
    ],
    copyright: String,
    developer: {
      text: String,
      name: String,
      link: String,
    },
  },
  { _id: false }
);

const siteMetaSchema = new Schema(
  {
    navbar: navbarSchema,
    footer: footerSchema,
  },
  { timestamps: true }
);

export default model("SiteMeta", siteMetaSchema);
