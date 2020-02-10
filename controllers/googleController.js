const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController
// findAll searches the Google Books API
// It makes sure that the books returned from the API all contain a title, author, link, description, and image
// It returns only the entries we haven't already saved

const googleApiLink = "https://www.googleapis.com/books/v1/volumes";

const filterForItemizedResults = results => {
	return results.data.items.filter(
		result =>
			result.volumeInfo.title &&
			result.volumeInfo.infoLink &&
			result.volumeInfo.authors &&
			result.volumeInfo.description &&
			result.volumeInfo.imageLinks &&
			result.volumeInfo.imageLinks.thumbnail
	);
};

const verifyDuplicateBooksInDatabase = (dbBooks, apiBooks) => {
	return apiBooks.filter(apiBook =>
		dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
	);
};

module.exports = {
	findAll: function(req, res) {
		const { query: params } = req;
		axios
			.get(googleApiLink, {
				params
			})
			.then(results => filterForItemizedResults(results))
			.then(apiBooks =>
				db.Book.find().then(dbBooks =>
					verifyDuplicateBooksInDatabase(dbBooks, apiBooks)
				)
			)
			.then(books => res.json(books))
			.catch(err => res.status(422).json(err));
	}
};
