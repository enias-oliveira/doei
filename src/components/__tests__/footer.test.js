import { render, screen } from "@testing-library/react";
import Footer from "../footer"
test("Testar se o footer está mostrando os textos.", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/www.DoEi!.com.br © 2021 - faça a diferença/i);
    expect(linkElement).toBeInTheDocument();
  });