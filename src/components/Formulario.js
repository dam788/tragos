import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContex';


const Formulario = () => {

  // nos traemos el context de categoria del archivo de context...
  const { categorias } = useContext(CategoriasContext);
  const { guardarBusqueda, setConsultar } = useContext(RecetasContext);

  // usamos un useState local, para busqueda
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  });

  const { nombre, categoria } = busqueda;

  // funcion para leer los contenidos
  let obtenerDatosRecetas = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const botonBuscar = e => {
    e.preventDefault();

    // si dejas los campos vacios te retorna null
    if (nombre === '' || categoria === '') return null;

    guardarBusqueda(busqueda);
    setConsultar(true);
  }

  return (
    <form
      onSubmit={botonBuscar}
      className="col-12"
    >
      <fieldset className="text-center">
        <legend>Busca Bebidas por Categoria o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Busca por Ingredientes"
            onChange={obtenerDatosRecetas}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosRecetas}
          >
            <option value="">-- Seleccione Categoría --</option>
            {categorias.map(categoria => (
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}
              >{categoria.strCategory}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-info btn-block"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
   );
}

export default Formulario;