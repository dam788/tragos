import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
// contexts
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContex';
import ModalProvider from './context/ModalContext';


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          <Header />
            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>

                <ListaRecetas />
            </div>

        </ModalProvider>
        </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
