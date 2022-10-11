import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import { IMaskInput } from "react-imask";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredSuits = details.filter((suit) => {
    return suit.cnj.includes(searchField);
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredSuits={filteredSuits} />
        </Scroll>
      );
    }
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Buscar</h2>
        <p>Busque pelo número unificado para localizar os processos</p>
      </div>
      <div className="pa2">
        <IMaskInput
          mask="0000000-00.0000.0.00.0000"
          className="pa3 ba3 grow ma3 w-50"
          type="search"
          placeholder="Digite o número do processo"
          onChange={handleChange}
        />
      </div>
      <div> {searchList()}</div>
    </section>
  );
}

export default Search;
