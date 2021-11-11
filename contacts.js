import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacts({contacts}) {
    const contactlist = contacts.map(contact => (
        <Card>
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Subtitle style={{color:"gray"}}>{contact.email}</Card.Subtitle>
                <Card.Text>{contact.company.catchPhrase}</Card.Text>
            </Card.Body>
        </Card>
    ))

    return(
        <div>
            <h1 className="text-center">Contact List</h1>
            {contactlist}
        </div>
    )
}

export default Contacts;