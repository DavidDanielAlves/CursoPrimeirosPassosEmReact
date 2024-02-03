import './formulario.css'
import CampoTexto from "../campo-texto"
import ListaSuspensa from '../lista-suspensa'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (

        < section className='formulario' >
            <img src='/imagens/formulario/fundo-formulario-jogo.jpg' alt='fundo do formulario' />
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome do jogo'
                    placeholder='Digite o nome do jogo'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='plataforma em qual joga'
                    placeholder='Escolha a plataforma em que joga esse jogo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Endereço de imagem para o jogo'
                    placeholder='Escolha uma imagem que represente o jogo'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section >
    )
}

export default Formulario