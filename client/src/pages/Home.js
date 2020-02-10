import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

function Home() {
	const [books, setBooks] = useState([]);
	const [query, setQuery] = useState("");
	const [message, setMessage] = useState("Search For A Book To Begin!");

	const handleInputChange = event => {
		const { value } = event.target;
		setQuery(value);
	};

	const getBooks = async () => {
		try {
			const response = await API.getBooks(query);
			setBooks(response.data);
		} catch (error) {
			setBooks([]);
			setMessage("No New Books Found, Try a Different Query");
			throw new Error(error);
		}
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		getBooks();
	};

	const handleBookSave = async id => {
		const book = books.find(book => book.id === id);
		const bookData = await API.saveBook({
			googleId: book.id,
			title: book.volumeInfo.title,
			subtitle: book.volumeInfo.subtitle,
			link: book.volumeInfo.infoLink,
			authors: book.volumeInfo.authors,
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks.thumbnail
		});
		return getBooks(bookData);
	};

	return (
		<Container>
			<Row>
				<Col size="md-12">
					<Jumbotron>
						<h1 className="text-center">
							<strong>(React) Google Books Search</strong>
						</h1>
						<h2 className="text-center">
							Search for and Save Books of Interest.
						</h2>
					</Jumbotron>
				</Col>
				<Col size="md-12">
					<Card title="Book Search" icon="far fa-book">
						<Form
							handleInputChange={handleInputChange}
							handleFormSubmit={handleFormSubmit}
							query={query}
						/>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col size="md-12">
					<Card title="Results">
						{books.length ? (
							<List>
								{books.map(book => (
									<Book
										key={book.id}
										title={book.volumeInfo.title}
										subtitle={book.volumeInfo.subtitle}
										link={book.volumeInfo.infoLink}
										authors={book.volumeInfo.authors.join(", ")}
										description={book.volumeInfo.description}
										image={book.volumeInfo.imageLinks.thumbnail}
										Button={() => (
											<button
												onClick={() => handleBookSave(book.id)}
												className="btn btn-primary ml-2"
											>
												Save
											</button>
										)}
									/>
								))}
							</List>
						) : (
							<h2 className="text-center">{message}</h2>
						)}
					</Card>
				</Col>
			</Row>
			<Footer />
		</Container>
	);
}

export default Home;
