import React from 'react';

import Container from 'react-bootstrap/Container';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const Notebook = props => {
  const { notes, removeNote } = props;

  return (
    <Container className="notebook">
      <h1>Notebook</h1>
      <hr />
      <CardDeck className="d-flex flex-column">
        <NotebookBody notes={notes} removeNote={removeNote} />
      </CardDeck>
    </Container>
  );
};


const NotebookBody = props => {
  const rows = props.notes.map(
    (row, index) => {
      return (
        <Accordion>
          <Card className="d-flex flex-column note">
            <Card.Header as="h4" className="d-flex flex-row">
              <span className="flex-grow-1">{row.title}</span>
              <Button onClick={() => props.starNote(index)} variant="outline-primary">
                MARK IMPORTANT
              </Button>
              <Accordion.Toggle as={Button} variant="outline-warning" eventKey="0">
                EDIT
              </Accordion.Toggle>
              <Button onClick={() => props.removeNote(index)} variant="outline-danger">
                DELETE
              </Button>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Editing Mode</Card.Body>
            </Accordion.Collapse>
            <Card.Body>
              <Card.Text>
                {row.contents}
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion>
      )
    }
  );
  return <div>{rows}</div>;
};

export default Notebook;