const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("articles", articleSchema);
module.exports = { ArticleModel };
