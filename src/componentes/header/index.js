import './header.css';

const Header = () => {
    return (
        <header className='cabecalho'>
            <img src='/imagens/header/bg-header.webp' alt='Logo De Jogos'/>

            <div className='cabecalho__descricao'>
                <h1>Centro De Jogos</h1>
                <p>Cadastre seus jogos preferidos separando-os por tópicos</p>
                <img src='/imagens/header/icon-control-game.png' alt='Icone de controle de jogo' />
            </div>
        </header>
        
    )
}

export default Header;