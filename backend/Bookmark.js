const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true }, // Assuming you want to associate bookmarks with users
});

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

module.exports = Bookmark;
