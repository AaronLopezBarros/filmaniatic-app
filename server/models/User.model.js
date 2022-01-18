const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    favs_movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
    pending_movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
    viewed_movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema)

module.exports = User
