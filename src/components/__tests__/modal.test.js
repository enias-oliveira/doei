import { render, screen } from "@testing-library/react";
import Agendamento from "../modal";
test("renders learn react link", () => {
    render(<Agendamento />);
    const linkElement = screen.getByText(/Agendamento/i);
    expect(linkElement).toBeInTheDocument();
  });