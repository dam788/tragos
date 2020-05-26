import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
// material-ui
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*xxxxxxxxxxxxxxxxx  MATERIAL UI  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 350,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


const Receta = ({ receta }) => {

  //configuracion del modal de material ui.
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  // abrir modal
  const handleOpen = () => {
    setOpen(true);
  }

  // cerrar modal
  const handleClose = () => {
    setOpen(false);
  }

  // extraer valores del context
  const { setIdReceta, informacion, guardarReceta } = useContext(ModalContext);

  // mostrar y formatear lista de ingredientes:
  const mostrarIngredientes = (info) => {

    let i;
    let ingredientes = [];

    for (i = 1; i < 16; i++){

      if (info[`strIngredient${i}`]) {

        ingredientes.push(

          <li>
            {info[`strIngredient${i}`]} {info[`strMeasure${i}`]}
          </li>

        );
      }
    }
    return ingredientes;
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
          className="card-img-top" />

        <div className="card-body">
          <button
            onClick={() => {
              setIdReceta(receta.idDrink);
              handleOpen();
            }}
            type="button"
            className="btn btn-block btn-primary"
          >Ver Receta</button>

          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setIdReceta(null);
              guardarReceta({});
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2
                className="text-center text-primary"
              >{informacion.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p> const informacion: any
                  {informacion.strInstructions}
              </p>
              <img
                src={informacion.strDrinkThumb}
                alt={`imagen de ${informacion.strDrink}`}
                className="img-fluid my-4"
              />
              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(informacion)}
              </ul>
            </div>
          </Modal>

        </div>
      </div>
    </div>
    );
}

export default Receta;