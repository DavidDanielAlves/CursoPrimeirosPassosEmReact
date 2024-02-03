import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src="./imagens/footer/fundo.png" alt="O banner principal da página do Organo" />

            <div className='container'>
                <div className='redes'>
                    <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                        <img src='imagens/footer/fb.png' alt='Icone do Facebook' />
                    </a>

                    <a href='https://www.twiter.com' target='_blank' rel='noreferrer'>
                        <img src='imagens/footer/tw.png' alt='Icone do Facebook' />
                    </a>

                    <a href='https://www.facebook.com/organooficial/' target='_blank' rel='noreferrer'>
                        <img src='imagens/footer/ig.png' alt='Icone do Facebook' />
                    </a>
                </div>

                <div className='mensagem'>
                    <p>Deseenvolvido por David Daniel Alves</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;