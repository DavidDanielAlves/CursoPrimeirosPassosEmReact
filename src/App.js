import { useState } from 'react';
import Banner from './componentes/banner'
import Formulario from './componentes/formulario';
import Time from './componentes/time';
import Footer from './componentes/footer';

function App() {

  const[colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },

    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },

    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: 'F0F8E2',
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },

    {
      nome: 'Mobile',
      corPrimaria: '#D86EFB',
      corSecundaria: '#FEBA05',
    },

    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: 'FFEEDF',
    }
  ]

  return (
    <div className="App">
      <Banner />
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
