const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    api_id: {
      type: Number,
      unique: true,
      required: true
    },
    tittle: {
      type: String,
      required: true
    },
    overview: {
        type: String
    },
    poster_path: {
        type: String
    },
    release_date: {
        type: String
    },
    vote_average: {
        type: Number
    },
    users_inFavs: [{type: Schema.Types.ObjectId, ref: 'User'}],
    users_inPending: [{type: Schema.Types.ObjectId, ref: 'User'}]
  },
  {
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema)

module.exports = Movie