import { render, screen } from "@testing-library/react";

import Home from "~/pages";

describe("Home", () => {
  it("should have The Odyssey of a Software Developer", () => {
    render(<Home />); // ARRAGE...

    const myElement = screen.getByText("The Odyssey of a Software Developer"); // ACT...

    expect(myElement).toBeInTheDocument(); // ASSERT...
  });

  it("should contain the text 'confucius'", () => {
    render(<Home />); // ARRAGE...

    const myElement = screen.getByText(/confucius/i); // ACT...

    expect(myElement).toBeInTheDocument(); // ASSERT...
  });

  it("should have a heading", () => {
    render(<Home />); // ARRAGE...

    const myElement = screen.getByRole("heading", {
      name: "Veo",
    }); // ACT...

    expect(myElement).toBeInTheDocument(); // ASSERT...
  });
});
