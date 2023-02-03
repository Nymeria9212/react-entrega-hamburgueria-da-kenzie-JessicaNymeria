import logo from "../../assets/logo.svg";
import { HeaderPage } from "./header";
export function Header() {
  return (
    <HeaderPage>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <input type="text" />
        <button>Pesquisar</button>
      </div>
    </HeaderPage>
  );
}
