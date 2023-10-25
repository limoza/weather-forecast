import { render, screen } from "@testing-library/react";
import { Ex } from ".";
import "@testing-library/jest-dom";

describe("sampleTest", () => {
  it("text", () => {
    render(<Ex />);
    expect(screen.getByText("testComponents")).toBeInTheDocument();
  });
});
