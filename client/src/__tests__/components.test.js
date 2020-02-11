import React from "react";
import { create } from "react-test-renderer";
import Book from "../components/Book/index";
import Card from "../components/Card/index";
import Footer from "../components/Footer/index";
import Form from "../components/Form/index";
import Grid from "../components/Grid/index";
import Jumbotron from "../components/Jumbotron/index";
import List from "../components/List/index";
import Nav from "../components/Nav/index";

describe("Render Book component correctly", () => {
	test("Matches the snapshot", () => {
		const book = create(<Book />);
		expect(book.toJSON()).toMatchSnapshot();
	});
});

describe("Render Card component correctly", () => {
	test("Matches the snapshot", () => {
		const card = create(<Card />);
		expect(card.toJSON()).toMatchSnapshot();
	});
});

describe("Render Footer component correctly", () => {
	test("Matches the snapshot", () => {
		const footer = create(<Footer />);
		expect(footer.toJSON()).toMatchSnapshot();
	});
});

describe("Render Form component correctly", () => {
	test("Matches the snapshot", () => {
		const form = create(<Form />);
		expect(form.toJSON()).toMatchSnapshot();
	});
});

describe("Render Grid component correctly", () => {
	test("Matches the snapshot", () => {
		const grid = create(<Grid />);
		expect(grid.toJSON()).toMatchSnapshot();
	});
});

describe("Render Jumbotron component correctly", () => {
	test("Matches the snapshot", () => {
		const jumbotron = create(<Jumbotron />);
		expect(jumbotron.toJSON()).toMatchSnapshot();
	});
});

describe("Render List component correctly", () => {
	test("Matches the snapshot", () => {
		const list = create(<List />);
		expect(list.toJSON()).toMatchSnapshot();
	});
});

describe("Render Nav component correctly", () => {
	test("Matches the snapshot", () => {
		const nav = create(<Nav />);
		expect(nav.toJSON()).toMatchSnapshot();
	});
});
