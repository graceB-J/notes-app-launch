import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const NoteSearch = props => {
    const [value, setValue] = useState('');

    const handleChange2 = event => {
        const { name, value } = event.target;
        //set corresponding state to value
        switch (name) {
            case 'value':
                setValue(value);
                break;
            default:
                console.log("change not handled");
                break;
        }
    };

    const sumbitForm = () => {
        if (value) {
            props.handleSearch(value);
            setValue('');
        }
    };

    return (
        <Container className="createNote">
            <h2>Search Here to Find Specific Notes</h2>
            <label htmlFor="value">Keyword</label>
            <InputGroup className="mb-3">
                <FormControl
                    autoComplete="off"
                    type="text"
                    id="value"
                    name="value"
                    placeholder="search note contents"
                    value={value}
                    onChange={handleChange2}
                />
            </InputGroup>

            <Button variant="primary" onClick={sumbitForm}>
                Search
            </Button>
        </Container>
    );
};

export default NoteSearch;