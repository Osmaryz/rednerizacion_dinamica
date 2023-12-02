import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';


function TablaColaboradores() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  
  const mostrarCampos = () => {

return colaboradores.map((colaborador, index) =>(
        <tr key={index}>
            
<td>{colaborador.id}</td>
<td>{colaborador.nombre}</td>
<td>{colaborador.correo}</td>
<td>{colaborador.edad}</td>
<td>{colaborador.cargo}</td>
<td>{colaborador.telefono}</td>
</tr>


    ));

  }
    
    return (
   <>
   <table>
    <thead>
        <tr>
         <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th> 
        </tr>
    </thead>
    <tbody>
        {mostrarCampos ()}
        
    </tbody>

   </table>
   </>
         
  );
}

export default TablaColaboradores;

/*
s
*/