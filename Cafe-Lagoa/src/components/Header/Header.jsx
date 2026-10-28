import "./Header.css"
import cafe from "./coffee.png"

function Header() {
    return ( 
    <header className="cabecalho">
    <div className="logo-container">
      <img id="imglogo" src={cafe} alt="" />
      <span className="logo">Café Lagoa</span>
    </div>
    <nav>
      <ul className="menu">
        <li>
          <div className="botao-cheio">
          <a href="#hero">Início</a>
          </div>
        </li>

        <li>
        <div className="botao">
          <a href="#servicos">Serviços</a>
        </div>
          
        </li>

        <li>
        <div className="botao">
        <a href="https://docs.google.com/document/d/1pomwE7GjDoVcLRNFMX0bS_lPyW6rTdIWzmqYvfhf7VM/edit?usp=sharing">
            Sobre
          </a>
        </div>
        </li>

        <li>
        <div className="botao">
        <a href="#footer">Contato</a>
        </div>
        </li>
      </ul>
    </nav>
  </header>
);
}

export default Header;