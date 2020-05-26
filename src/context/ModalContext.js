import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

// creo el contexto de modal
export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [idreceta, setIdReceta] = useState(null);

  // el state para guardar el objeto receta
  const [informacion, guardarReceta] = useState({});

  // una vez que tenemos una id receta hacemos llamado a la api de ingredientes...
  useEffect(() => {

    const obtenerIngredientes = async () => {

      if (!idreceta) return null;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const res = await Axios.get(url);
      // console.log(res.data.drinks[0])
      guardarReceta(res.data.drinks[0])
    }
    obtenerIngredientes();

  }, [ idreceta ] )

  return (
    <ModalContext.Provider
      value={{
        informacion,
        guardarReceta,
        setIdReceta,

    }}
    >
      {props.children}
    </ModalContext.Provider>
   );
}

export default ModalProvider;