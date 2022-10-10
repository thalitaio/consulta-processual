import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  test("Deve iniciar o input com o valor vazio", () => {
    render(<Search />);

    const searchInput = screen.getByText("");
    expect(searchInput).toBeInTheDocument();
  });
});
