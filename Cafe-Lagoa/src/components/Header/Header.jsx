import "./Header.css"
import cafe from "./coffee.png"

function Header() {
    return ( 
    <header class="cabecalho">
    <div class="logo-container">
      <img id="imglogo" src={cafe} alt="" />
      <span class="logo">Café Lagoa</span>
    </div>
    <nav>
      <ul class="menu">
        <li>
          <div class="botao-cheio">
          <a href="#hero">Início</a>
          </div>
        </li>

        <li>
        <div class="botao">
          <a href="#servicos">Serviços</a>
        </div>
          
        </li>

        <li>
        <div class="botao">
        <a href="https://docs.google.com/document/d/1pomwE7GjDoVcLRNFMX0bS_lPyW6rTdIWzmqYvfhf7VM/edit?usp=sharing">
            Sobre
          </a>
        </div>
        </li>

        <li>
        <div class="botao">
        <a href="#footer">Contato</a>
        </div>
        </li>
      </ul>
    </nav>
  </header>
);
}

export default Header;