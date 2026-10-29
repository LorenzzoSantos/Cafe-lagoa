import "./Main.css"
import cao from "./orelha_teoria_do_elo_instituto_ampara_animal.png"

function Main () {
    return(
    <main>
        <section className="hero">
        <div id="conteudo">
            <p id="titulo-lagoa">LAGOA DA AUDIÇÃO · ORELHÓPOLIS</p>
            <h1>Café zuvido, vista para o orelha.</h1>
            <p id="texto-descritivo"> Grãos de pequenos cachorros do sul do ped-, pães de biblioteca de zuvidos caninos 
                e PINTOS feitos todos os doentes aqui na 200.</p>
    
            <div id="botoes">
            <button id="btn-conteudo1" className="btn-cheio">
                <a href="#"><strong>Ver Cardápio</strong></a>
            </button>

            <button id="btn-conteudo2" className="btn-normal">
                <a href="#"><strong>Fale com a gente</strong></a>
            </button>
            </div>
        </div>

        <div id="midia">
            <img id="orelha" src={cao} alt="Balcão do café com a lagoa ao fundo."/>

        </div>
        </section>
    </main>
    
)}

export default Main