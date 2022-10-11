import React from "react";
import Card from "./Card";

function SearchList({ filteredSuits }) {
  const filtered = filteredSuits.map((suit) => (
    <Card key={suit.cnj} suit={suit} />
  ));
  return <div className="flex flex-wrap items-center">{filtered}</div>;
}

export default SearchList;
