import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TablaColaboradores from './componentes/TablaColaboradores'
import Formulario from './componentes/Formulario'


const App = () => {
//console.log(setColaboradores);

  return (
    <>
    <Row className="w-100 justify-content-around">
    <Col lg={8}>
    <TablaColaboradores/>
    </Col>

    <Col lg={4}>
    <Formulario/>
    </Col>
    </Row>
    
    
    </>
  )
}

export default App
