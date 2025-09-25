import mongoose from "mongoose";

const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    title: String,
    date: String,
    time: String,
    location: String,
    description: String,
    image: String,
  },
  { _id: false }
);

const servicesSchema = new Schema(
  {
    manthan: {
      hero: {
        title: String,
        subtitle: String,
        theme: String,
        rating: String,
        isLive: Boolean,
        videoPlaceholder: String,
      },
      features: [
        {
          icon: String,
          text: String,
        },
      ],
      upcomingEvents: [eventSchema],
      pastEvents: [eventSchema],
      socialLinks: {
        linkedin: String,
        youtube: String,
      },
      colors: {
        primary: String,
        secondary: String,
        background: String,
      },
    },
  },
  { timestamps: true }
);

const Service = model("Service", servicesSchema);

export default Service;
