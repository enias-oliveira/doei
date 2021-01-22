import { render, screen } from "@testing-library/react";
import StepsLandingPage from "../steps-landing-page";
test("Testar se os passos para navegação do site estão sendo exibidos corretamente.", () => {
    render(<StepsLandingPage />);
    const linkElement = screen.getByText(/Se cada um fizer um pouquinho, muita gente será beneficiada! Para doar e fazer alguém mais feliz hoje, é simples assim:/i);
    expect(linkElement).toBeInTheDocument();
  });