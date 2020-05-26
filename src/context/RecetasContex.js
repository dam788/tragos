import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();



const RecetasProvider = (props) => {

  const [recetas, setRecetas] = useState([]);

  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: ''
  });
  // destructuro para pasarlo en el template string
  const { nombre, categoria } = busqueda;

  const [consultar, setConsultar] = useState(false);

  // ejecutamos api cuandoactualiza busqueda...
  useEffect(() => {

    if (consultar) {

      const obtenerRecetas = async () => {

        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

        const resultado = await Axios.get(url);

        // console.log(resultado.data.drinks);
        setRecetas(resultado.data.drinks);
      }
      obtenerRecetas();
    }

  }, [categoria,consultar,nombre]);




  return (
    <RecetasContext.Provider
      value={{
        recetas,
        guardarBusqueda,
        setConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
   );
}

export default RecetasProvider;
