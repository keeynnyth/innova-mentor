import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RachaNuevaView from './RachaNuevaView'; // Ajusta la ruta de tus componentes
import SeleccionMetaRacha from './SeleccionMetaRacha'; // Ajusta la ruta

export default function Racha() {
  // 'bienvenida' -> Muestra el aviso de que inició el día 1
  // 'seleccionar-meta' -> Muestra las opciones de 7, 14 y 30 días
  const [pasoActual, setPasoActual] = useState('bienvenida');
  const navigate = useNavigate();

  // Cuando el usuario hace clic en "¡Vamos por más!" en la primera pantalla
  const manejarContinuarBienvenida = () => {
    setPasoActual('seleccionar-meta');
  };

  // Cuando el usuario confirma su meta (7, 14 o 30 días)
  const manejarMetaConfirmada = (metaElegida) => {
    console.log("Guardando en la app la meta de:", metaElegida.dias, "días con", metaElegida.premios, "premios.");
    
    /* 
       Aquí puedes conectar tu API o Backend, por ejemplo:
       await api.guardarMetaUsuario({ dias: metaElegida.dias });
    */

    // Una vez guardado el objetivo, rediriges al usuario a su panel principal
    navigate('/mi-recorrido'); 
  };

  // Si decide volver atrás o configurar después
  const manejarCancelar = () => {
    navigate('/mi-recorrido');
  };

  return (
    <>
      {pasoActual === 'bienvenida' && (
        <RachaNuevaView onContinuar={manejarContinuarBienvenida} />
      )}

      {pasoActual === 'seleccionar-meta' && (
        <SeleccionMetaRacha 
          onMetaSeleccionada={manejarMetaConfirmada} 
          onCancelar={manejarCancelar}
        />
      )}
    </>
  );
}