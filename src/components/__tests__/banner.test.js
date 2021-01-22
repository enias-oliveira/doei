import { render, screen } from "@testing-library/react";
import BannerLandingPage from "../banner-landing-page"
test("renders learn react link", () => {
    render(<BannerLandingPage />);
    const linkElement = screen.getByText(/Doe amor/i);
    expect(linkElement).toBeInTheDocument();
  });