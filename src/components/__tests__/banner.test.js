import { render, screen } from "@testing-library/react";
import BannerLandingPage from "../banner-landing-page"
test("Testar se o banner está mostrando a menssagem como deveria.", () => {
    render(<BannerLandingPage />);
    const linkElement = screen.getByText(/Doe amor/i);
    expect(linkElement).toBeInTheDocument();
  });