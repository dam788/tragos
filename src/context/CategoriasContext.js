import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios';

// crear el context
export const CategoriasContext = createContext();





// provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

  // aca creamos el state del context
  const [categorias, setCategorias] = useState([]);

  // ejecutar llamado a la api
  useEffect(() => {
    const obtCategorias = async() => {

      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

      const categorias = await Axios.get(url)

      setCategorias(categorias.data.drinks);

    }
    obtCategorias();
   }, []);

  return (
    <CategoriasContext.Provider
      // en value va todo lo que va a estar disponible en los otros componentes...
      value={{
        categorias
      }}

    >
      {props.children}
    </CategoriasContext.Provider>
  )

}

export default CategoriasProvider;