import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chisiamo from '../asset/chisiamo.png';
import './chiSiamo.css';

function ChiSiamo() {
  return (
    <Container className='mt-5 mb-5'>
      <Row className='d-flex align-items-end'>
        <Col>
            <div id='who'>
                <h2 className='text-light text-start fs-5'>CHI SIAMO</h2>
                <p className='text-light text-start fs-5'>
                    Mawi Solutions è una realtà nuova, nata dalla passione e 
                    dedizione di giovani nel campo dell’informatica.
                    Crediamo nella nostra attività e tramite i nostri prezzi 
                    fortemente competitivi, ci poniamo l’obiettivo di contribuire 
                    al processo di digitalizzazione su scala nazionale. Vogliamo 
                    rendere più semplice ed economica l’integrazione 
                    informatica, permettendo anche alle piccole realtà di 
                    rimanere al passo con i tempi; spesso loro impedito per via 
                    di costi troppo alti o servizi poco efficienti.
                    Anche il nostro metodo di lavoro è giovane, consiste nella 
                    semplificazione del processo, così da ridurre costi, ma 
                    ottenendo il massimo risultato, realizzando applicazioni e 
                    servizi altamente performanti.
                    Ci dedichiamo totalmente al cliente in tutte le fasi del 
                    processo, realizzando interfacce con design specializzato, 
                    informando il cliente nel momento della realizzazione, 
                    testando l’applicazione e offrendo supporto per modifiche. Il 
                    nostro lavoro continua anche in post-servizio, rimanendo 
                    vicini al cliente per eventuale assistenza.
                    Svolgiamo quest’attività anche in remoto, ma la nostra sede
                </p>
            </div>
        </Col>
        <Col>
            <img src={chisiamo} className='img-fluid' alt="chisiamo" />
        </Col>
      </Row>
    </Container>
  );
}

export default ChiSiamo;