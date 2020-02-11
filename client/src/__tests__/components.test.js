import React from "react";
import { create } from "react-test-renderer";
import Footer from "../components/Footer/index";
import Jumbotron from "../components/Jumbotron/index";

describe("Render Footer component correctly", () => {
	test("Matches the snapshot", () => {
		const footer = create(<Footer />);
		expect(footer.toJSON()).toMatchSnapshot();
	});
});

describe("Render Jumbotron component correctly", () => {
	test("Matches the snapshot", () => {
		const jumbotron = create(<Jumbotron />);
		expect(jumbotron.toJSON()).toMatchSnapshot();
	});
});
