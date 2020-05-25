import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

import Form from './BootstrapForm.js';
import Notebook from './Notebook.js';

class App extends Component {
  state = {
    notes: [
      {
        'title': 'Day 1 - Beginning to Journal',
        'contents': 'I am going to try to write more so I remember things.'
      }
    ]
  };

  removeNote = index => {
    const { notes } = this.state;
    this.setState({
      notes: notes.filter(
        (row, rowIndex) => {
          return rowIndex !== index;
        }
      )
    });
  };

  handleSubmit = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  render() {
    const { notes } = this.state;

    console.log(notes);

    return (
      <div className='background'>
        <Form handleSubmit={this.handleSubmit} />
        <Notebook notes={notes} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;