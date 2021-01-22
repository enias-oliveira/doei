import { render, screen } from "@testing-library/react";
import Header from "../header"
test("Testar os textos do header quando o usuário está deslogado.", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Sou ONG/ && /Sou ONG/i);
    expect(linkElement).toBeInTheDocument();
  });