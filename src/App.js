import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Series from './components/Series';
import Imagem from './components/Imagem'

// para importar a função diretamente você usa as {} e exporta diretamente da linha do Function Component

function App() {

  return (
      <div>
        <Navbar />
        <Series />
      </div>  
  );
}

export default App;
