import { render, screen } from "@testing-library/react";
import StepsLandingPage from "../steps-landing-page";
test("renders learn react link", () => {
    render(<StepsLandingPage />);
    const linkElement = screen.getByText(/queira contribuir/i);
    expect(linkElement).toBeInTheDocument();
  });