import './Main.css'

function Main () {
    return (
        <main>
        <section class="hero" id="hero">
            <h1>Criamos Sites que funcionam</h1>
            <p>Layouts Responsivos, rápidos e acessíveis para o seu negócio crescer na web</p>
            <div class="acoes">
                <a class="botao botao-cheio" href="#">Peça um Orçamento</a>
                <a class="botao botao-vazado" href="#">Ver portfólio</a>
            </div>
        </section>
        <section class="servicos" id="servicos">
            <h2>Nossos serviços</h2>
            <div class="grade-cards">
                <article class="card">
                    <h3>Design de Interface</h3>
                    <p>Telas claras pensadas para o usuário.</p>
                </article>

                <article class="card">
                    <h3>Responsividade</h3>
                    <p>O mesmo site em qualquer tela.</p>
                </article>

                <article class="card">
                    <h3>Performance</h3>
                    <p>Páginas leves que carregam rápido.</p>
                </article>
            </div>
        </section>
    </main>
    )
}
export default Main