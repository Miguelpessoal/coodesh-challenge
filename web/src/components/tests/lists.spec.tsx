import { render, screen } from "@testing-library/react";

import { EmptyList } from "../EmptyList";

describe("Lists", () => {
  it("renders correctly empty list", () => {
    render(<EmptyList />);

    expect(
      screen.getByText("Não há transações cadastradas!")
    ).toBeInTheDocument();
  });
});
