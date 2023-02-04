import logo from "../../assets/logo.svg";
import { useState } from "react";
import { HeaderPage } from "./header";

export function Header({ setSearchValue }) {
  const [search, setSearch] = useState("");

  const searachInput = () => {
    setSearchValue(search);
  };

  return (
    <HeaderPage>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        <button
          onClick={() => {
            searachInput();
          }}
        >
          Pesquisar
        </button>
      </div>
    </HeaderPage>
  );
}
