import { render, screen } from "@testing-library/react";
import Header from "../header"
test("renders learn react link", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Sou ONG/i);
    expect(linkElement).toBeInTheDocument();
  });