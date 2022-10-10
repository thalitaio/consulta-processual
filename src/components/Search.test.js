import { render, screen } from "@testing-library/react";
import Search from "./Search";

ReactModal.setAppElement(document.createElement("div"));

describe("Search Component", () => {
  test("Deve iniciar o input com o valor vazio", () => {
    render(<Search />);

    const searchInput = screen.getByText("");
    expect(searchInput).toBeInTheDocument();
  });
});

// se o imput existe
// disparar evento no input
// testar se ele busca algo não localizado
