import { render, screen } from "@testing-library/react";
import SuccessStoriesLandingPage from "../success-stories-landing-page";
test("Testar se os textos das histórias de sucesso estão funcionando.", () => {
    render(<SuccessStoriesLandingPage />);
    const linkElement = screen.getByText(/Ficamos muito felizes com a contribuição de todos que ajudaram a Ong Amiga dos Sonhos na meta de arrecadar 3.000 meias para as crianças carentes do bairro Parolim./i);
    expect(linkElement).toBeInTheDocument();
  });