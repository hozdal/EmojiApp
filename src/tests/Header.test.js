import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../Header";


test("Header text is correctly?", () => {
    render(<Header />);
    const headerElement = screen.getByText("Emoji Search");
    expect(headerElement).toBeInTheDocument();
});