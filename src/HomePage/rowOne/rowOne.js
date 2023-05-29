import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import iconAndroid from '../asset/Icon_smart.png';
import iconPc from '../asset/icon_pc.png';
import iconWeb from '../asset/icon_monitor.png';
import iconCloud from '../asset/icon_consulenza.png';
import './rowOne.css';

function RowOne() {
    return (
        <>
            <div className='d-flex justify-content-center mt-3'>
                <hr />
            </div>

            <Container>
                <Row>
                    <Col md={3}>
                        <div className='d-flex align-items-center flex-column'>
                            <img src={iconAndroid} className='img-fluid' alt='Icon' />
                            <h5>Sviluppo iOS/Android</h5>
                            <hr />
                            <p>Sviluppiamo applicazioni funzionanti perfettamente su qualsiasi piattaforma, in tempi brevi e a costi più che accessibili.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='d-flex align-items-center flex-column'>
                            <img src={iconPc} className='img-fluid' alt='Icon' />
                            <h5>Sviluppo Siti Web e Web Apps</h5>
                            <hr />
                            <p>
                                Realizziamo web application di
                                ogni tipologia: da siti vetrina ad
                                app gestionali, adatte a tutti i
                                sistemi operativi, rispettando le
                                vostre richieste
                            </p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='d-flex align-items-center flex-column'>
                            <img src={iconWeb} className='img-fluid' alt='Icon' />
                            <h5>Sviluppo Dekstop Apps</h5>
                            <hr />
                            <p>
                                Sviluppiamo Desktop 
                                Apps, indipendenti o 
                                complementari ad 
                                eventuali applicazioni 
                                mobile e/o web apps.
                            </p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='d-flex align-items-center flex-column'>
                            <img src={iconCloud} className='img-fluid' alt='Icon' />
                            <h5>Consulenza Informatica</h5>
                            <hr />
                            <p>
                                Non solo supporto 
                                informatico, ma offriamo 
                                anche servizi di 
                                consulenza per aziende e 
                                privati
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RowOne;
