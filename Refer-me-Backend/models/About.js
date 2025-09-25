import mongoose from "mongoose";

const { Schema, model } = mongoose;

const teamMemberSchema = new Schema(
  {
    name: String,
    role: String,
    image: String,
    linkedin: String,
    twitter: String,
    github: String,
    bio: String,
    video: String,
  },
  { _id: true } // set true so we can update/delete by _id
);

const aboutSchema = new Schema(
  {
    ourStory: {
      title: String,
      content: [String],
      stats: {
        years: String,
        yearsDescription: String,
      },
      credentials: [String],
      impactStats: {
        trainedProfessionals: String,
        trainingHours: String,
        countries: String,
        corporateTrainings: String,
      },
      community: {
        title: String,
        telegram: String,
        whatsapp: String,
        linkedInGroups: String,
        facebookFollowers: String,
      },
      whyChooseUs: [String],
    },
    coreCommittee: [teamMemberSchema],
    paymentPolicy: {
      header: {
        title: String,
        subtitle: String,
      },
      sections: [
        {
          title: String,
          icon: String,
          color: String,
          content: [Schema.Types.Mixed],
        },
      ],
      contactEmail: String,
    },
    whatWeDo: {
      title: String,
      description: String,
      items: [String],
    },
  },
  { timestamps: true }
);

const About = model("About", aboutSchema);

export default About;
