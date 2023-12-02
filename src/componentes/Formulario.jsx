import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = (ingreso) => {

  const [form, setForm] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono:"",
  });

  function ingreso_dato_colaborador (e) {
    const campo_input = e.target.name;
    const valor_input = e.target.value; 
    //console.log(campo_input);
    //console.log(valor_input);


  setForm({
    ...form,
    [campo_input]: valor_input,
  });
};

  const ingreso = (e) => {
    e.preventDefault();
    alert(form.nombre);
    alert(form.correo);
  };

  return (
        <>
          <form className="formulario rounded bg-success-subtle" onSubmit={ingreso} >
            <div className="form-group  p-2 ">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                className='w-100'
                onChange={ingreso_dato_colaborador}
            
              />
            </div>
            <div className="form-group m-2 p-1">
              <input
                type="email"
                placeholder="Correo"
                name="correo"
                className='w-100'
                onChange={ingreso_dato_colaborador}
              />
            </div>
            <div className="form-group m-2 p-1">
              <input
                type="number"
                placeholder="Edad"
                name="edad"
                className='w-100'
                min="1"
                max="120"
                onChange={ingreso_dato_colaborador}
                
              />
            </div>
            <div className="form-group m-2 p-1">
              <input
                type="text"
                placeholder="Cargo"
                name="cargo"
                className='w-100'
                onChange={ingreso_dato_colaborador}
                
              />
            </div>
            <div className="form-group m-2 p-1">
              <input
                type="number"
                placeholder="Teléfono"
                name="telefono"
                className='w-100'
                pattern="[0-9]{10}"
                onChange={ingreso_dato_colaborador}
                
              />
            </div>
            <button type="submit" value="Enviar" className="btn-primary p-1 m-2">
              Ingresar
            </button>
            <button type="submit" value="Enviar" className="btn-primary p-1 m-2">
              Modificar
            </button>
          </form>
        </>
      
  )
}

export default Formulario

/*

 

*/