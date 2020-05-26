import React from 'react';

import Container from 'react-bootstrap/Container';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


const Notebook = props => {
  const { notes, value, removeNote } = props;

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
  let displayedNotes = !props.value ? props.notes : props.notes.filter(function (item) {
    let searchValue = this.props.value.toLowerCase();
    return (searchValue.indexOf(item.contents.toLowerCase()) != -1 || searchValue.indexOf(item.title.toLowerCase()) != -1);
  });

  const rows = displayedNotes.map(
    (row, index) => {
      return (
        <Accordion>
          <Card className="d-flex flex-column note">
            <Card.Header as="h4" className="d-flex flex-row">
              <span className="flex-grow-1">{row.title}</span>
              <Accordion.Toggle as={Button} variant="outline-warning" eventKey="0">
                EDIT
              </Accordion.Toggle>
              <Button onClick={() => props.removeNote(index)} variant="outline-danger">
                DELETE
              </Button>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Editing Mode -- IN DEVELOPMENT</Card.Body>
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
  return (
    <div>{rows}</div>
  );
};

export default Notebook;