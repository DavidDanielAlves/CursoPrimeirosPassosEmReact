import { useState } from 'react';
import Banner from './componentes/banner'
import Formulario from './componentes/formulario';
import Time from './componentes/time';
import Footer from './componentes/footer';
import Header from './componentes/header';

function App() {

  const[colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const times = [
    {
      nome: 'Ação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },

    {
      nome: 'Suspense',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },

    {
      nome: 'online',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },

    {
      nome: 'offline',
      corPrimaria: '#E06B69',
      corSecundaria: 'F0F8E2',
    },

    {
      nome: 'Terror',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },

    {
      nome: 'Para familia',
      corPrimaria: '#D86EFB',
      corSecundaria: '#FEBA05',
    },

    {
      nome: 'FPS',
      corPrimaria: '#FF8A29',
      corSecundaria: 'FFEEDF',
    }
  ]

  return (
    <div className="App">
      <Header/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
      <Time 
       key={time.nome}
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
