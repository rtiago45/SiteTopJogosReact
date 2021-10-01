import React,{useState} from 'react';
import Navbar from './componentss/Navbar';
import Series from './componentss/Series';
import Imagem from './componentss/Imagem'

// para importar a função diretamente você usa as {} e exporta diretamente da linha do Function Component
import Sobre from './componentss/Sobre';

function App() {

  return (
      <div>
        <Navbar />
        <Series />
      </div>  
  );
}

export default App;
